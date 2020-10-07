require("dotenv").config();

const express = require("express"); //get express package
const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config"); //variable is a destructing assignment ./config is a relative file
const app = express(); //storing an instance of express in app
const pgp = require("pg-promise")(); //storing an instance of pg-promise and initializing it immediately

// const db = pgp("postgres://anna:e90Bgtu3@localhost:5432/likeypixdb");
const db = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`);
db.any("SELECT * from USERS")
    .then(users => console.log(users))
    .catch(error => console.log(error));

app.listen(PORT, function() {
    console.log(`The server at port ${PORT} is listening.`); //interpolated string
});
