import db from '../db.js';

export function getAllClientsService() {
   return db.query('SELECT * FROM client_tb');
}

