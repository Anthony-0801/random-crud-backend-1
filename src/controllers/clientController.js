import { getAllClientsService, createClientService  } from "../services/clientService.js";

export const getAllClientsController = async (req, res) => {
  try {
    const clients = await getAllClientsService();
    res.status(200).json(clients.rows);
  } catch (error) {
    console.error("Error fetching clients:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getClientByIdController = async (req, res) => {
  const clientId = parseInt(req.params.id, 10);

  if (isNaN(clientId)) {
    return res.status(400).json({ error: "Invalid client ID" });
  }

  try {
    const client = await getAllClientsService(clientId);
    if (client.rows.length === 0) {
      return res.status(404).json({ error: "Client not found" });
    }
    res.status(200).json(client.rows[0]);
  } catch (error) {
    console.error("Error fetching client:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createClientController = async (req, res) => {
  const { name, email, job, rate, isActive } = req.body;

  if (!name || !email || !job || !rate || typeof isActive !== 'boolean') {
    return res.status(400).json({ error: "All fields are required", 
        content: `${name}, ${email}, ${job}, ${rate}, ${isActive}`
     });
  }

  try {
    const newClient = await createClientService({
      name,
      email,
      job,
      rate,
      isActive,
    });
    res.status(201).json(newClient.rows[0]);
  } catch (error) {
    console.error("Error creating client:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
