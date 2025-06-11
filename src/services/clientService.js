import db from "../db.js";

export function getAllClientsService() {
  return db.query("SELECT * FROM client_tb");
}

export function getClientByIdService(clientId) {
  return db.query("SELECT * FROM client_tb WHERE id = $1", [clientId]);
}

export function createClientService(clientData) {
  const { name, email, phone } = clientData;
  return db.query(
    "INSERT INTO client_tb (name, email, job, rate, isActive) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, email, job, rate, isActive]
  );
}
