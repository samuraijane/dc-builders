/*
*  Write a server that will respond with the appropriate JSON blob 
*  for the given rendering
*/
var express = require('express');
var app = express();
var albums = require('./abstractions/albums.js');
var circles = require('./abstractions/circles.js');
var movies = require('./abstractions/movies.js');
var nameTags = require('./abstractions/nameTags.js');
var poker = require('./abstractions/poker.js');
var rectangle = require('./abstractions/rectangle.js');
var restaurants = require('./abstractions/restaurants.js');
var students = require('./abstractions/students.js');
var surveys = require('./abstractions/surveys.js');
var tweets = require('./abstractions/tweets.js');


app.use(express.static(__dirname + '/public'));

// GET /api/albums
app.get('/api/albums', function (req, res) {
    res.send(JSON.stringify(albums))
})

// GET /api/circles
app.get('/api/circles', function (req, res) {
    res.send(JSON.stringify(circles))
})

// GET /api/movies
app.get('/api/movies', function (req, res) {
    res.send(JSON.stringify(movies))
})

// GET /api/nametags
app.get('/api/nametags', function (req, res) {
    res.send(JSON.stringify(nameTags))
})

// GET /api/poker
app.get('/api/poker', function (req, res) {
    res.send(JSON.stringify(poker))
})

// GET /api/rectangle
app.get('/api/rectangle', function (req, res) {
    res.send(JSON.stringify(rectangle))
})

// GET /api/restaurants
app.get('/api/restaurants', function (req, res) {
    res.send(JSON.stringify(restaurants))
})

// GET /api/students
app.get('/api/students', function (req, res) {
    res.send(JSON.stringify(students))
})

// GET /api/surveys
app.get('/api/surveys', function (req, res) {
    res.send(JSON.stringify(surveys))
})

// GET /api/tweets
app.get('/api/tweets', function (req, res) {
    res.send(JSON.stringify(tweets))
})

app.listen(3000, function(){
    console.log('rendering-api is now listening on port 3000...');
})