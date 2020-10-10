require("dotenv").config();
const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/"));

app.post("/books", function (req, res) {
  const { title, author, publicationDate } = req.body;
  res.json({
    title,
    author,
    publicationDate,
  });
});

app.listen(3001, function () {
  console.log(`The server at port 3001 is listening.`);
});
