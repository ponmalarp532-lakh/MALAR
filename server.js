const express = require("express");
const app = express();
const fs = require("fs");

app.get("/resume", (req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) return res.status(500).send("Error reading data");
    res.json(JSON.parse(data));
  });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
