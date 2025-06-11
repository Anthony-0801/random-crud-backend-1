import express from 'express';
import { getAllClientsController } from '../controllers/clientController.js';

const router = express.Router();

router.get('/', getAllClientsController);

export default router;