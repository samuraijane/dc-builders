var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    },
    {
        id: 2,
        todo: "Implement"
    }
];

let autoIncrement = 2;

// GET /api/todos
app.get('/api/todos', (req, res) => {
    res.send(todoList);
})

// GET /api/todos/:id
app.get('/api/todos/:id', (req, res) => {

    console.log(req.params.id);

    let result = todoList.filter((todoItem) => {
        return todoItem.id === parseInt(req.params.id);
    })
    
    if(result.length === 1){
        res.send(result[0]);
    } else if(result.length === 0) {
        res.status(404).send("todo list item doesn't exist");
    } else {
        res.status(500).send("The server had an error: too many todos");
    }
})

// POST /api/todos
app.post('/api/todos', (req, res) => {
    console.log(req.body);
    console.log(typeof req.body);

    let newItem = req.body;
    newItem["id"] = autoIncrement++;
    
    console.log(newItem);

    todoList.push(newItem);
    res.send(newItem);
})

// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res) => {
    let itemFound = false;

    for(let idx = 0; idx < todoList.length; idx++) {
        console.log(todoList[idx])
        if(todoList[idx].id === parseInt(req.params.id)){
            itemFound = true;
            console.log("In the loop")
            todoList[idx]["isCompleted"] = req.body.isCompleted;
            todoList[idx]["todo"] = req.body.todo;
            res.send(todoList[idx]);
        }
    }
    res.status(404).send("404 - Item does not exist");
})

// DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res) => {
    let originalLength = todoList.length;

    todoList = todoList.filter((todoItem) => {
        return todoItem.id !== parseInt(req.params.id);
    })

    console.log(todoList);

    if(todoList.length === originalLength){
        res.send("Item already removed");
    }

    res.send("Deleted an item");
})

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})