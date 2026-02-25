const express = require("express");
const app = express();

const PORT = 3000;

app.get("/api/hello", (req, res) => {
  res.json({
    success: true,
    message: "Your GET API route is working!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Go to http://localhost:3000/api/hello to see the response from the working GET API route.
