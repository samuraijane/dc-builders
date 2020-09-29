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

let autoIncrement = 3;


// GET /api/owners
app.get('/api/owners', (req, res) => {
    res.send(owners);
})

// GET /api/owners/:id
app.get('/api/owners/:id', (req, res) => {
    console.log(req.params.id);

    let result = owners.filter((owner) => {
        return owner.id === parseInt(req.params.id);
    })

    res.send(result);
})

// POST /api/owners
app.post('/api/owners', (req, res) => {
    console.log(req.body);
    console.log(typeof req.body);

    let newOwner = req.body;
    newOwner["id"] = autoIncrement++;

    owners.push(newOwner);

    res.send(newOwner);
})

// PUT /api/owners/:id
app.put('/api/todos/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params.id);

    // for (let i = 0; i < owners.length; i++) {
    //     console.log(owners[i]);

    //     if (owners[i].id === parseInt(req.params.id)) {
    //         console.log("In the loop");
    //         todoList[i]["name"] = req.body.name;
    //         todoList[i]["pets"] = req.body.pets;
    //         res.send(todoList[i]);
    //     }
    // }

    // res.status(404).send("Owner is not in database.");
})

// DELETE /api/owners/:id
app.delete('/api/owners/:id', (req, res) => {

    let originalLength = owners.length;

    owners = owners.filter( (owner) => {
        return owner.id !== parseInt(req.params.id);
    })

    console.log(owners);

    if (owners.length === originalLength) {
        res.send("Owner has already been removed.");
    }
    else {
        res.send("Owner has been deleted.");
    }
})

// GET /api/owners/:id/pets
app.get('/api/owners/:id/pets', (req, res) => {

    let result = owners.filter((owner) => {
        return owner.id === req.params.id;
    })

    res.send(result);
})

// GET /api/owners/:id/pets/:petId

// POST /api/owners/:id/pets

// PUT /api/owners/:id/pets/:petId

// DELETE /api/owners/:id/pets/:petId


app.listen(3000, function(){
    console.log('Pets API is now listening on port 3000...');
})