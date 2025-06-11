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
  const { name, email, job, rate, isActive } = clientData;
  return db.query(
    "UPDATE client_tb SET name = $1, email = $2, job = $3, rate = $4, isActive = $5 WHERE id = $6 RETURNING *",
    [name, email, job, rate, isActive, clientId]
  );
}

export function deleteClientService(clientId) {
  return db.query("DELETE FROM client_tb WHERE id = $1 RETURNING *", [
    clientId,
  ]);
}
