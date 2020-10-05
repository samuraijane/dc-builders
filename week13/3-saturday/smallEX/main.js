// pull necessary env files akes available globally at top
require("dotenv").config();

// pulls express
const express = require("express");

// pulls express.PORT to be immeditaley use here as PORT
const {DB_LOCAL,DB_PASSWORD,DB_NAME,DB_USER, PORT } = require("./config");
const app = express();
const pgp = require("pg-promise")();

//connecting to DB w/ post res promise
// const db = pgp ("postgres://xxx:password@localhost:5432/likeypixdb")
const db = pgp (`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`)
db.any("SELECT * from tasks")
    .then(tasks => console.log(tasks))
    .catch(error => console.log(error));

app.listen(PORT, function() {
    console.log(`The server at ${PORT} is listening.`);
});