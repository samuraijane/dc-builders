require("dotenv").config();

const express = require("express");
const app = express();
//const db = require("./models");
const bodyParser = require('body-parser');
const pgp = require("pg-promise")();
const Sequelize = require('sequelize');

const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config");
// const { User } = require('./models');

// const apiUser = require("./routes/usersRouter");

app.use(bodyParser.json());

app.use(express.static('public'));








var allBooks = [];

app.post('/books', function(req, res) {
    console.log("book recieved");
    console.log(req.body)
    allBooks.push(req.body);
});

app.get('/books', function(req, res) {
  res.send(allBooks);
})
const database = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`);

//apiUser(app, db);

app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});
