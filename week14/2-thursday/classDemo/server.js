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
const apiBooks = require("./api/apiBooks");
// const apiAuthor = require("./api/apiAuthor");
// const apiTitle = require("./api/apiTitle");
// const apiPubDate = require("./api/apiPubDate");

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
const database = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`); //not needed

// called like function, passes through apiUser.js
apiBooks(app, db);
// apiAuthor(app,db);
// apiTitle(app,db);
// apiPubDate(app,db)


// callback
app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});




