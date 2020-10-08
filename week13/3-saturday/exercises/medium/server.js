require("dotenv").config();

const express = require("express");
const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config");
const app = express();
const pgp = require("pg-promise")();

const db = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`);

app.post("/tasks", function(req, res) {
  res.json({
    is: "working"
  });
});

app.get("/tasks", function(req, res) {
  db.any("SELECT * from TASKS")
  .then(tasks => console.log(tasks))
  .catch(error => console.log(error));
});

app.patch("/tasks/:id/is_completed", function(req, res) {
  res.json({
    is: "working"
  });
});

app.patch("/tasks/:id/title", function(req, res) {
  res.json({
    is: "working"
  });
});

app.delete("/tasks/:id", function(req, res) {
  res.json({
    is: "working"
  });
});

db.any("SELECT * from TASKS").then((tasks) => console.log(tasks));

app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});