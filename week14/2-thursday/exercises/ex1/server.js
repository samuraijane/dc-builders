const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require("./models");
const pgp = require("pg-promise")();
const Sequelize = require("sequelize");


app.use(bodyParser.json());

app.use(express.static(__dirname + '/public')); 

app.use(function(req, res,){
    
    
})

// app.post("/books", function(req, res,) { //client makes a request to books
//     const {author, title, publicationDate} =req.body; //destructuring - grabbing key names out of a structure
//     res.json({ //send body back in the response
//         author,
//         title,
//         publicationDate
//     });
// });

const apiAuthor = require("./api/apiAuthor");
apiAuthor(app, db);
const database = pgp(
    "postgres://stashag:graham@localhost:5432/library"
);

app.listen(3001, function() {
    console.log("The server at port 3001 is listening.");
});
