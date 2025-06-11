import express from "express";
import cors from "cors";
import clientRoutes from "./routes/clientRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// This is where we import the client routes
app.use(clientRoutes);

