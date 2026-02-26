require("dotenv").config();
const fetch = require("node-fetch");

async function sendData() {
  const payload = { name: "Charlotte", age: 26 };
  const apiUrl = process.env.API_URL || "http://localhost:3000";

  const response = await fetch(`${apiUrl}/api/data`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  console.log("Server response:", result);
}

sendData();
