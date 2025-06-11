import {getAllClientsService} from '../services/clientService.js';

export const getAllClientsController = async (req, res) => {
    try {
        const clients = await getAllClientsService();
        res.status(200).json(clients.rows);
    } catch (error) {
        console.error('Error fetching clients:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}