var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    },
    {
        id: 100,
        todo: "Duplicate 1"
    },
    {
        id: 100,
        todo: "Duplicate 2"
    }

];


// GET /api/todos
app.get('/api/todos', (req, res) => {
    console.log(`I'm here`);
    res.send(todoList)
});

// GET /api/todos/:id
app.get('/api/todos/:id', (req, res) => {

    // console.log(req.params.id);

    let result = todoList.filter((todoItem)=>{
        return todoItem.id === parseInt(req.params.id)
    })

    if (result.length === 1) {
        res.send(result[0]);
    } else if (result.length === 0) {
        res.status(404).send('TO DO ITEM DOESNT EXIST!')
    } else {
        res.status(500).send('SERVER ERROR ON TODOS')
    }
   
});

let autoIncrement = 2;

// POST /api/todos
app.post('/api/todos', (req, res) => {
    // console.log(req.body);
    // console.log(typeof req.body);

    let newItem = req.body
    newItem["id"] = autoIncrement++;

    // console.log(newItem)

    todoList.push(newItem)

    res.send(newItem)
});

// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    let foundItem = false

    for (let i = 0; i < todoList.length; i++) {

        console.log(todoList[i])

        if(todoList[i].id === parseInt(req.params.id)) {
            foundItem = true
            console.log('in loop')
            todoList[i]["isDone"] = req.body.isDone
            todoList[i]["todo"] = req.body.todo
            res.send(todoList[i])
        }
    }
    if (!foundItem) {
    res.status(404).send('Item does not exsist');
    }
});
// DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res) => {
    let oLength = todoList.length

    todoList = todoList.filter((todoItem)=>{
        // as long as isnot equal return everything else
        return todoItem.id !== parseInt(req.params.id)
    })

    if (todoList.length === oLength){
        console.log('Already removed')
    }

    console.log('Deleted')
    console.log(todoList)

    res.send('Deleted')
    // console.log(req.params.id);
    // res.send(`todoList/${req.params.id}.delete`)
    
});

//
app.get('/', (req, res) => {
    console.log(`I'm here`);
    res.send('Main Page')
});

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})