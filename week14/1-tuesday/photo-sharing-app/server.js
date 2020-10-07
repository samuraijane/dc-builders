require("dotenv").config();

const app = require("express")();
const db = require("./models");
const bodyParser = require('body-parser');
const pgp = require("pg-promise")();
const Sequelize = require('sequelize');

const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config");
const { User } = require('./models');

const apiUser = require("./api/apiUser");

app.use(bodyParser.json());

app.get("/heartbeat", function(req, res) {
  res.json({
    is: "working"
  });
});

app.post("/books", function(req, res) {
  res.json({
    api: "books"
  });
});

const database = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`);

apiUser(app, db);

app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});
