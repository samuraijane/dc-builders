const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3001;

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/'));

app.post("/books", function(req, res) {
    const {title, author, publicationDate} = req.body;
    res.json({
      title,
      author,
      publicationDate
    });
  });

app.listen(PORT, function() {
    console.log(`The server at port ${PORT} is listening.`);
  });