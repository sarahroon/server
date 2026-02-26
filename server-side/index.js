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

app.listen(8000, () => {
  console.log(`Started listening on http://localhost:8000`);
});

const sum = (a, b) => a + b;
console.log(sum("extra argument", 10));
