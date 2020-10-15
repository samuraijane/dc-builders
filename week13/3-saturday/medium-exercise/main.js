require("dotenv").config();

const express = require("express");
const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config");
const app = express();
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const db = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`);

app.use(bodyParser.json());
//POST /tasks

app.post("/tasks", (req, res) => {
  const { newTaskTitle } = req.body;
  //const { newTaskTitle } = req.body;
  db.none("INSERT INTO tasks (title) VALUES ($1)", [newTaskTitle]).then(() => {
    res.send(`Task "${newTaskTitle}" was created`);
  });
});

//GET /tasks

app.get("/tasks", (req, res) => {
  db.any("SELECT * from TASKS").then((tasks) => res.send(tasks));
});

//PATCH /tasks/:id/is_completed

//PATCH /tasks/:id/title]

//DELETE /tasks/:id

app.delete("/tasks/:id", (req, res) => {
  res.json({
    task: "deleted",
  });
});

app.listen(PORT, function () {
  console.log(`The Server at post ${PORT} is listening.`);
});
