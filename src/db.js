import pg from "pg";
import env from "dotenv";
env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
});
db.connect();

if (!db) {
  console.error("Database connection failed");
} else {
  console.log("Database connected successfully");
}

const query = async (text, params) => {
  try {
    const res = await db.query(text, params);
    return res;
  } catch (err) {
    console.error("Query error", err);
    throw err;
  }
};

export default {
  query,
  db,
};
