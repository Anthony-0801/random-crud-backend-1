import db from "../db.js";

export function getAllClientsService() {
  return db.query("SELECT * FROM client_tb");
}

export function getClientByIdService(clientId) {
  return db.query("SELECT * FROM client_tb WHERE id = $1", [clientId]);
}

export function createClientService(clientData) {
  const { name, email, job, rate, isActive } = clientData;
  return db.query(
    "INSERT INTO client_tb (name, email, job, rate, isActive) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, email, job, rate, isActive]
  );
}

export function updateClientService(clientId, clientData) {
  // Build dynamic SET clause and values array
  const fields = [];
  const values = [];
  let idx = 1;

  for (const [key, value] of Object.entries(clientData)) {
    fields.push(`${key} = $${idx}`);
    values.push(value);
    idx++;
  }
  if (fields.length === 0) {
    throw new Error("No fields to update");
  }
  values.push(clientId);

  const query = `UPDATE client_tb SET ${fields.join(
    ", "
  )} WHERE id = $${idx} RETURNING *`;
  return db.query(query, values);
}

export function deleteClientService(clientId) {
  return db.query("DELETE FROM client_tb WHERE id = $1 RETURNING *", [
    clientId,
  ]);
}
