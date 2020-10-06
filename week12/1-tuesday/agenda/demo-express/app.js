const express = require("express");
const app = express();

const port = process.argv[2] || 3000;

app.get("/todo", function (req, res) {
  res.send("TODO Lists");
});

app.post("/todo", function (req, res) {
  console.log("Im a server and I got a new request for a list");
  res.send("request received");
});

app.get("/", function (req, res) {
  res.send("Hello DigitalCrafts");
});

app.listen(3000, () => {
  console.log(`Server is running on Port ${port}`);
});
