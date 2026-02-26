const fetch = require("node-fetch");

async function sendData() {
  const payload = { name: "Charlotte", age: 26 };

  const response = await fetch("http://localhost:3000/api/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  console.log("Server response:", result);
}

sendData();

// Go to http://localhost:3000/api/data to see the response from the working POST API route.
