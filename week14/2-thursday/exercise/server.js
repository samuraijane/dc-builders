require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./models");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const Sequelize = require("sequelize");

const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config");

const apiAuthors = require("./api/apiAuthors");
const apiBooks = require("./api/apiBooks");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/"));

app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

const database = pgp(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`
);

apiAuthors(app, db);
apiBooks(app, db);

app.listen(PORT, () => {
  console.log(`The server at port ${PORT} is listening.`);
});
