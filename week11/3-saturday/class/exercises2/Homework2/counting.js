const express = require("express");
const app = express();
const port = 3000;

let counter = 0;

app.get("/value", (req, res) => {
  res.send(String(counter));
});

app.post("/increment", (req, res) => {
  counter++;
  res.send(String(counter));
});

app.post("/decrement", (req, res) => {
  counter--;
  res.send(String(counter));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
