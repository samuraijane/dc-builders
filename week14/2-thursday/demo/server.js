require("dotenv").config();
const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const router = require("./api/routers");
const bodyParser = require("body-parser");
const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/"));

app.use("/", router);

// const database = pgp(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`
// );

app.listen(3001, function () {
  console.log(`The server at port 3001 is listening.`);
});
