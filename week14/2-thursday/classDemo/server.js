require("dotenv").config();

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
// const { User } = require('./models');
const { Boooks } = require('./models');


// const apiUser = require("./api/apiUser");
// const libInfo = require(".index/index")

// middleware that lets you see body
app.use(bodyParser.json());
// connects to index
app.use(express.static(__dirname+'/'));

app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working"
  });
});

// app.post("/tasks", (req, res) => {
//   res.json({
//     api: "tasks"
//   });
// });


app.post("/books",async (req, res) => {
  const {title, author, pubdate} = req.body;
  const newBook = await db.Boooks.create({
    title,
    author,
    pubdate
  })

  res.json({
    api: "book list",
    id: newBook.id,
    title,
    author,
    pubdate,
  });
});

// wraps in pg promise
const database = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`);

// called like function, passes through apiUser.js

// apiUser(app, db);

app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});




