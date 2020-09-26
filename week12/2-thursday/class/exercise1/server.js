var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let autoIncrement = 3

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    },
    {
        id: 2,
        todo: "Get groceries"
    }
];

// GET /api/todos
app.get('/api/todos', (req, res) => {
    res.send(todoList)
})

// GET /api/todos/:id
app.get('/api/todos/:id', (req, res) => {
    let result = todoList.filter( (todoItem) => {
        return todoItem.id === parseInt(req.params.id)
    })

    if (result.length === 1) {
        res.send(result[0])
    } else if (result.length === 0) {
        res.status(404).send("todo list item doesn't exist")
    } else {
        res.status(500).send("The server had an error: too many todos")
    }
})

// POST /api/todos
app.post('/api/todos', (req, res) => {
    console.log(req.body)
    console.log(typeof req.body)
    let newItem = req.body
    newItem["id"] = autoIncrement++
    todoList.push(newItem)
    res.send(newItem)
})

// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res) => {

    for (let idx = 0; idx < todoList.length; idx++) {
        if (todoList[idx].id === parseInt(req.params.id)) {
            todoList[idx]["isCompleted"] = req.body.isCompleted
            todoList[idx]["todo"] = req.body.todo
            res.send(todoList[idx])
        }
        
    }
    res.send()
})


// DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res) => {
    todoList = todoList.filter( (todoItem) => {
        return todoItem.id !== parseInt(req.params.id)
    })

    console.log(todoList)
    res.send("Item deleted")
})


app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})