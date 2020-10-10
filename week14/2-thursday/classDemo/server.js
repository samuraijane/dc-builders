require("dotenv").config();

// packages
const express = require('express');
const app = express();
// app.use(); for middleware
// app.post(); to hit an endpoint
// app.listen(); what PORT it is lsitening to
const db = require("./models");
const bodyParser = require('body-parser');
const pgp = require("pg-promise")();
const Sequelize = require('sequelize');

const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config");

// const { Author, Boooks } = require('./models');

const apiAuthor = require("./api/apiAuthor");
const apiBooks = require("./api/apiBooks");


// middleware that lets you see body
app.use(bodyParser.json());
// connects to index
app.use(express.static(__dirname+'/'));

app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working"
  });
});


// wraps in pg promise
const database = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`);

// called like function, passes through apiUser.js
apiBooks(app, db);


// callback
app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});




