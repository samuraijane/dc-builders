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
app.get('/api/todos', (req, res) => {
    res.send(todoList);
})
// GET /api/todos/:id
app.get('/api/todos/:id', (req, res) => {
    let result = todoList.filter( (todoItem) => {
        return todoItem.id === parseInt(req.params.id)
    })

    if (result.length === 1){
        res.send(result[0]);
    } else if(result.length === 0){
        res.status(404).send("Error: todo item not found")
    } else if(result.length > 1){
        res.status(500).send("Error: too many todos")
    }

})
// POST /api/todos

app.post('/api/todos', (req, res) => {
    let newItem = req.body;
    newItem["id"] = autoIncrement++;
    todoList.push(req.body)
})
// PUT /api/todos/:id.
app.put('api.todos/:id', (req,res) => {
    

    for (let i = 0; i < todoList.length; i++ ){
        if(todoList[i].id === parseInt(req.params.id)){
            todoList[i]["isCompleted"] = req.body.isCompleted
            todoList[i]["todo"] = req.body.todo
            res.send(todoList[i])
        }
    }
    res.status(404).send("Item not found");
})
// DELETE /api/todos/:id
app.delete('api/todos/:id', (req,res)=>{
    let originalLength = todoList.length

    todoList.filter((todoItem)=>{
        return todoItem.id !== parseInt(req.params.id)

    })
    res.send();
})

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})