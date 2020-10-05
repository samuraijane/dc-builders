var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"))

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

let autoIncrement = 3

// GET /api/todos
app.get('/api/todos', (req, res) => {
    res.send(todoList)
})

// GET /api/todos/:id
app.get('/api/todos/:id', (req, res) => {

    // This could just as easily be find
    let result = todoList.filter( (todoItem) => {
        return todoItem.id === parseInt(req.params.id)
    })

    if (result.length === 1) {
        res.send(result[0])
    } else if (result.length === 0) {
        res.status(404).send("todo list item doesn't exist")
    } else {
        res.status(500).send("The server had an error: to many todos")
    }
})

// POST /api/todos
app.post('/api/todos', (req, res) => {

    let newItem = req.body
    newItem["id"] = autoIncrement++

    todoList.push(newItem)

    res.send(newItem)
})

// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res) => {
    // console.log(req.body)
    // console.log(req.params.id)

    // This way is much cleaner than what we did in class
    let itemIndex = todoList.findIndex( (todoItem) => {
        return todoItem.id === parseInt(req.params.id)
    }) 

    if(itemIndex >= 0) {
        // Overwrite the id in the body with the one from the URL
        req.body.id = todoList[itemIndex].id
        todoList[itemIndex] = req.body  
        res.send(todoList[itemIndex])
    } else {
        res.status(404).send("Item does not exist") 
    }

    // // From class - this works but is ugly
    // let foundItem = false

    // for( let idx = 0; idx < todoList.length; idx++) {
    //     console.log(todoList[idx]) 

    //     if(todoList[idx].id === parseInt(req.params.id)){
    //         foundItem = true
    //         console.log("In the loop")
    //         todoList[idx]["isCompleted"] = req.body.isCompleted
    //         todoList[idx]["todo"] = req.body.todo
    //         res.send(todoList[idx])
    //     }
    // }
    // if (!foundItem) {
    //     res.status(404).send("Item does not exist")
    // }
})

// DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res) => {
    let originalLength = todoList.length

    todoList = todoList.filter( (todoItem) => {
        return todoItem.id !== parseInt(req.params.id)
    })

    console.log(todoList)

    if (todoList.length === originalLength){
        res.send("Item already removed")
    }

    res.send("Deleted this item")
})

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})