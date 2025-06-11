import express from "express";
import { getAllClientsController, createClientController, getClientByIdController } from "../controllers/clientController.js";

const router = express.Router();

router.get("/clients", getAllClientsController);
router.get("/clients/:id", getClientByIdController);
router.post("/clients", createClientController);

export default router;
