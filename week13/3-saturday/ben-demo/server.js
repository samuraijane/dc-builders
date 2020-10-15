require("dotenv").config();

const express = require("express");
const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config");
const app = express();
const pgp = require("pg-promise")();

//const db = pgp("postgres://DB_USER:DB_PASSWORD@DB_LOCAL/DB_NAME");
const db = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`);
db.any("SELECT * from USERS")
  .then((users) => console.log(users))
  .catch((error) => console.log(error));

app.listen(PORT, function () {
  console.log(`The Server at post ${PORT} is listening.`);
});
