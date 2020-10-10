const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());

app.post("/books", function (req, res) {
  const { author, title, publicationDate } = req.body;
  res.json({
    author,
    title,
    publicationDate,
  });
});

app.listen(3001, function () {
  console.log("server has started");
});
