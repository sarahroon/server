import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import pg from "pg";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/waves", (req, res) => {
  res.send("waves");
});

app.post("/waves", (req, res) => {
  console.log(req.body);
  res
    .status(200)
    .json({ message: `You sent me this: ${JSON.stringify(req.body)}` });
});

// Use PORT from environment, fallback to 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Started listening on http://localhost:${PORT}`);
});

// Example sum function
const sum = (a, b) => a + b;

// If you intended to test with numbers:
console.log(sum(10, 20)); // 30
