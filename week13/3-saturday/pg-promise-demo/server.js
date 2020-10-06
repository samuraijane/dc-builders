require("dotenv").config(); //not set to a variable because makes process available globally, must be at very top!!!

const express = require('express'); // loading a package/built in node module
const { DB_LOCAL, DB_NAME, DB_PASSWORD, DB_USER, PORT } = require('./config'); //destructuring assignment and load a file
const app = express(); //storing an instance of express
const pgp = require('pg-promise')(); //require it and get instance of it immediately

app.get('/heartbeat', function(req, res) {
    res.json({
        is: 'working'
    });
});

// const db = pgp('postgres://toots:Ewtrtw2020@localhost:5432/likeypixdb'); //wrapping the database
const db = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`)
db.any('SELECT * FROM users') //any is a method on an instance of a postgres promise
    .then(users => console.log(users))
    .catch(error => console.log(error))

app.listen(PORT, function() {
    console.log(`The server at port ${PORT} is listening`)
})