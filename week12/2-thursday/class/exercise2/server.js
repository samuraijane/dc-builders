var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var owners = [
    {
        id: 1,
        name: "Adam",
        pets: [
            {
                id: 1,
                name: "Vera",
                type: "Dog"
            },
            {
                id: 2,
                name: "Felix",
                type: "Cat"
            }
        ]
    },
    {
        id: 2,
        name: "Kamilah",
        pets: [
            {
                id: 1,
                name: "Doug",
                type: "Dog"
            }
        ]
    }
];


// GET /api/owners
app.get('/api/owners', (req, res) => {
    res.send(owners)
})

// GET /api/owners/:id
app.get('/api/owners/:id', (req, res) => {
    console.log(req.params.id)
    res.send(owners)
})
// POST /api/owners
app.post('/api/todos', (req, res) => {
    console.log(req.body)
    console.log(typeof req.body)
    let newOwner = req.body
    newOwner["id"] = 2
    
    console.log(newOwner)

    todoList.push(newOwner)

    res.send(newOwner)
})
// PUT /api/owners/:id

// DELETE /api/owners/:id


// GET /api/owners/:id/pets

// GET /api/owners/:id/pets/:petId

// POST /api/owners/:id/pets

// PUT /api/owners/:id/pets/:petId

// DELETE /api/owners/:id/pets/:petId


app.listen(3000, function(){
    console.log('Pets API is now listening on port 3000...');
})