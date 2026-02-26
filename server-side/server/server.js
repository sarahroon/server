require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// POST endpoint
app.post("/api/data", (req, res) => {
  const receivedData = req.body;
  console.log("Received data:", receivedData);

  res.json({
    message: "Data received successfully!",
    data: receivedData,
    apiKey: process.env.API_KEY, // example usage of secret
  });
});

// Optional: GET endpoint for testing
app.get("/api/data", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
