require("dotenv").config();

const express = require("express");
const app = require("express")();
const bodyParser = require('body-parser');
const pgp = require("pg-promise")();
const Sequelize = require('sequelize');

const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./config"); //destructuring!!!

app.use(bodyParser.json());

app.use(express.static('public'));
// app.use((req, res, next) => { 
//     res.append('Access-Control-Allow-Origin', ['*']); 
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); 
//     res.append('Access-Control-Allow-Headers', 'Content-Type'); next(); });

app.post('/books', function(req, res) {
    console.log(req.body);
    res.send();
})

app.get('/books', function(req, res) {   //why am I getting an empty object? it shows I send a object in the POST (req.body)
    res.send(req.body);
})

const database = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`);

app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});