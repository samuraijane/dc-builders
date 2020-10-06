const pgp = require("pg-promise")();
const db = pgp("postgres://localhost:5432/todo_app");
const express = require("express");
const bodyParser = require("pg-promise")();
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/tasks", (req, res) => {
  const newTaskTitle = req.body.title;
});
