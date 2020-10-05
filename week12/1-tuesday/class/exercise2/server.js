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
app.get('/api/albums', (req, res) => {
    console.log(`${JSON.stringify(albums)}`)
    res.send(`${JSON.stringify(albums)}`);
});

// GET /api/circles
app.get('/api/circles', (req, res) => {
    console.log(`${JSON.stringify(circles)}`)
    res.send(`${JSON.stringify(circles)}`);
});

// GET /api/movies
app.get('/api/movies', (req, res) => {
    console.log(`${JSON.stringify(movies)}`)
    res.send(`${JSON.stringify(movies)}`);
});

// GET /api/nametags
app.get('/api/nameTags', (req, res) => {
    console.log(`${JSON.stringify(nameTags)}`)
    res.send(`${JSON.stringify(nameTags)}`);
});

// GET /api/poker
app.get('/api/poker', (req, res) => {
    console.log(`${JSON.stringify(poker)}`)
    res.send(`${JSON.stringify(poker)}`);
});

// GET /api/rectangle
app.get('/api/rectangle', (req, res) => {
    console.log(`${JSON.stringify(rectangle)}`)
    res.send(`${JSON.stringify(rectangle)}`);
});

// GET /api/restaurants
app.get('/api/restaurants', (req, res) => {
    console.log(`${JSON.stringify(restaurants)}`)
    res.send(`${JSON.stringify(restaurants)}`);
});

// GET /api/students
app.get('/api/students', (req, res) => {
    console.log(`${JSON.stringify(students)}`)
    res.send(`${JSON.stringify(students)}`);
});

// GET /api/surveys
app.get('/api/surveys', (req, res) => {
    console.log(`${JSON.stringify(surveys)}`)
    res.send(`${JSON.stringify(surveys)}`);
});

// GET /api/tweets
app.get('/api/tweets', (req, res) => {
    console.log(`${JSON.stringify(tweets)}`)
    res.send(`${JSON.stringify(tweets)}`);
});

app.listen(3000, function(){
    console.log('rendering-api is now listening on port 3000...');
})