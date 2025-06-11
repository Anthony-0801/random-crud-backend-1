import express from "express";
import {
  getAllClientsController,
  createClientController,
  getClientByIdController,
  updateClientController,
  deleteClientController,
} from "../controllers/clientController.js";

const router = express.Router();

router.get("/clients", getAllClientsController);
router.get("/clients/:id", getClientByIdController);
router.post("/clients", createClientController);
router.patch("/clients/:id", updateClientController);
router.delete("/clients/:id", deleteClientController);

export default router;
