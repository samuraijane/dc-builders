require("dotenv").config();

const express = require("express");
const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config");
const app = express();
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();

app.get("/heartbeat", function(req, res) {
  res.json({
    is: "working"
  });
});

app.use(bodyParser.json());

app.post("/tasks", function(req, res) {
  const { newTaskTitle } = req.body;
  db.none("INSERT INTO tasks (title) VALUES ($1)", [newTaskTitle]).then(() => {
    res.send(`Task "${newTaskTitle}" was created`);
  });
});


const db = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`);
// db.any("SELECT * from USERS")
//   .then(users => console.log(users))
//   .catch(error => console.log(error));

app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});
