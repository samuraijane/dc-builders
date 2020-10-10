const express = require('express');
const app = require('express')();
const bodyParser = require('body-parser');

//This is middleware
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.post("/books", function(req, res) {
    //Syntax below is called "destructuring"
    const {author, title, publicationDate} = req.body;
  res.json({
    author,
    title,
    publicationDate
  });
});

app.listen(3001, function() {
  console.log("The server is listening...")
});

