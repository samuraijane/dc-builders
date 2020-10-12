const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models");
const pgp = require("pg-promise")();
const Sequelize = require("sequelize");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
// app.post("/books", function (req, res) {
//   const { author, title, publicationDate } = req.body;
//   res.json({
//     author,
//     title,
//     publicationDate,
//   });
// });
const apiAuthor = require("./api/apiAuthor");
apiAuthor(app, db);

const database = pgp(
  "postgres://heatherluttrell:Facehead@localhost:5432/library"
);
app.listen(3001, function () {
  console.log("server has started");
});
