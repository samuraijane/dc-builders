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

let autoIncrement = 2;

// GET /api/todos
app.get('/api/todos', (req, res) => {
    res.send(todoList)
})

// GET /api/todos/:id
app.get('/api/todos/:id', (req, res) => {
    console.log(req.params.id)

    let result = todoList.filter( (todoItem) => {
        return todoItem.id === parseInt(req.params.id)
    })

    if (result.length === 1) {
        res.send(result[0])
    } 
    else if (result.length === 0) {
        res.status(404).send("todo list item doesn't exist")
    }
    else {
        res.status(500).send("The server had an error: to many todos.")
    }
})

// POST /api/todos
app.post('/api/todos', (req, res) => {
    console.log(req.body);
    console.log(typeof req.body);

    let newItem = req.body;
    newItem["id"] = autoIncrement++;
    
    todoList.push(newItem);

    res.send(newItem);
})

// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params.id);

    let mutateItem;
    for (let i = 0; i < todoList.length; i++) {
        console.log(todoList[i]);

        if (todoList[i].id === parseInt(req.params.id)) {
            console.log("In the loop");
            todoList[i]["isCompleted"] = req.body.isCompleted;
            todoList[i]["todo"] = req.body.todo;
            res.send(todoList[i]);
        }
    }

    res.status(404).send("Item does not exist.");
})

// DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res) => {

    let originalLength = todoList.length;
    
    todoList = todoList.filter( (todoItem) => {
        return todoItem.id !== parseInt(req.params.id);
    })

    console.log(todoList);

    if (todoList.length === originalLength) {
        res.send("Item already removed");
    }
    else {
        res.send("Deleted this item");
    }

})

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})