const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello from Azure App Service</h1>
    <p>This Node.js app is running on Azure without managing a VM.</p>
    <p>Created by Duarte.</p>
  `);
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "running",
    message: "Azure App Service is working"
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});