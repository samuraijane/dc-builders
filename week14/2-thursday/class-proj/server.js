require("dotenv").config();

const express = require("express");
const app = require("express")();
const bodyParser = require('body-parser');
const pgp = require("pg-promise")();
const Sequelize = require('sequelize');

const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config"); //destructuring!!!
const { Author, Books } = require('./models');
//const db = require('./models');
const database = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`);

//const apiAuthor = require("./api/apiAuthor");
//const apiBooks = require("./api/apiBooks");

app.use(bodyParser.json());
app.use(express.static('public'));
//apiAuthor(app, db);
//apiBooks(app, db);

app.post('/books', async function(req, res) {
    console.log(req.body);
    const {title, author, date } = req.body; //destructuring. get title, author, and date out of request body. in fetch stored in bookPayload variable
    
    // Find all authors in database where name is value from form
    // Raw SQL: SELECT * FROM "Authors" WHERE name = author;
    // Returns an empty object if can't find the givenAuthor in the database
    let givenAuthor = await Author.findOne({
      where: {
          name: author
      }
    })

    //if findOne produces an empty object, then create a new row in "Authors" with the given Author information
    if (!givenAuthor) {
      givenAuthor = await Author.create({
        name: author   
        //don't need to do id since Author model will populate id on its own
      })
    }

    // Find all books in database where title is value from form and author.id is the id associated with the author from the given form
    // Raw SQL: SELECT * FROM "Books" WHERE title = title,  authorId = givenAuthor.id;
    // Returns an empty object if can't find the givenBook in the database
    let givenBook = await Books.findOne({
      where: {
        title,
        authorId: givenAuthor.id 
      }
    })

    //if findOne produces an empty object, then create a new row in "Books" with the given Book information
    if (!givenBook) {
      givenBook = await Books.create({
        title: title,
        authorId: givenAuthor.id,
        pubDate: date 
        //don't need to do id for book since Books model will populate id on its own
      })
    }

    res.send(req.body);
})

app.get('/books', async (req, res) => {
  const books = await Books.findAll();
  res.json(books);
});


app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});