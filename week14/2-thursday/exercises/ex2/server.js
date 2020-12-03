const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));

app.post("/books", function(req, res) {
    const {author, title, publicationDate} = req.body;
    res.json({
      author,
      title,
      publicationDate
    });
  });

app.listen(3001, function() {
    console.log('Server has started at port 3001');
});