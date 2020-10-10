require("dotenv").config();

const express = require("express");
const { DB_USER, DB_PASSWORD, DB_LOCAL, DB_NAME, PORT } = require("./config");
const app = express();
const pgp = require("pg-promise")();

app.get("/heartbeat", function(req, res) {
    res.json({
        is: "working"
    });
});

const db = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`)
// const db = pgp("postgres://joe:doorman@localhost:5432/likeypixdb");
db.any("SELECT * from USERS")
    .then(users => console.log(users))
    .catch(error => console.log(error))

app.listen(PORT, function () {
    console.log(`The server at port ${PORT} is listening.`);

});