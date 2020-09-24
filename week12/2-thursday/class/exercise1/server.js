var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    }
];

// GET /api/todos

// GET /api/todos/:id

// POST /api/todos

// PUT /api/todos/:id

// DELETE /api/todos/:id

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})