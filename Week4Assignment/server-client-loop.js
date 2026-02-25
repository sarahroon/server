const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.post("/api/data", (req, res) => {
  console.log("Server received:", req.body);
  res.json({ message: "Data received successfully!", received: req.body });
});

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server closed via SIGINT.");
    process.exit(0);
  });
});

async function sendDataToServer(payload) {
  try {
    const response = await fetch(`http://localhost:${PORT}/api/data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Server returned non-JSON response:", text);
    } else {
      const data = await response.json();
      console.log("Client received:", data);
    }
  } catch (err) {
    console.error("Error sending POST request:", err);
  }
}

(async () => {
  const payloads = Array.from({ length: 20 }, (_, i) => ({
    name: `User${i + 1}`,
    age: 21 + i,
  }));

  await Promise.all(payloads.map((p) => sendDataToServer(p)));

  setTimeout(() => {
    server.close(() => console.log("Server closed gracefully."));
  }, 3000);
})();
