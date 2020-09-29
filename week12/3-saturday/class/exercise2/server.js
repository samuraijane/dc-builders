var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'))

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    },

    {
        id: 2,
        todo: "Get Groceries"
    }
];

let autoIncrement = 3;

// GET /api/todos

app.get('/api/todos', function(req, res) {
    res.send(todoList);
})

// GET /api/todos/:id

app.get('/api/todos/:id', function(req, res) {
    console.log(req.params.id);

    let result = todoList.filter((todoItem) => { //result could be of length 1 or 0
        return todoItem.id === parseInt(req.params.id);
    })

    if (result.length === 1) {
        res.send(result[0]);
    }
    else if (result.length === 0) {
        res.status(404).send("todo list item doesn't exist");
    }
    else {
        res.status(500).send("the server had an error. too many todos."); //two todos with same index
    }

})

// POST /api/todos
app.post('/api/todos', function(req, res) {
    console.log("Server side: ", req.body); //don't need to parse because express knows how to turn body into object using extra library
    
    let newItem = req.body;
    newItem["id"] = autoIncrement++; //setting newItem id to autoIncrement which is 2 and then ++ will add one to autoIncrement after that

    todoList.push(newItem);
    res.send(newItem);
    console.log("current todolist", todoList);
})

// PUT /api/todos/:id

app.put('/api/todos/:id', function(req, res) {
    console.log(req.body);
    console.log(req.params.id);

    for(let i=0; i<todoList.length; i++) {
        if(todoList[i].id === parseInt(req.params.id)) {
            todoList[i]["isCompleted"] = req.body.isCompleted;
            todoList[i]["todo"] = req.body.todo;
            res.send(todoList[i]);
        }
    }
    res.status(404).send("The item doesn't exist");
})


// DELETE /api/todos/:id

app.delete('/api/todos/:id', function(req, res) {
    
    let origLength = todoList.length;

    todoList = todoList.filter((todoItem) => { //result could be of length 1 or 0
        return todoItem.id !== parseInt(req.params.id);  //this modifies the list to include everything besides the req.param
    })

    console.log(todoList);

    if (todoList.length === origLength) {
        res.send("Item already removed");
    }

    res.send("Deleted this item");
})

// LISTEN

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})