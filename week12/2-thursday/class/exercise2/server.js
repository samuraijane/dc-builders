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

    let result = owners.filter((ownerItem) => {
        return ownerItem.id === parseInt(req.params.id);
    })
    if(result.length === 1){
        res.send(result[0]);
    } else if(result.length === 0){
        res.status(404).send("Todo list item does not exist");
    } else {
        res.status(500).send("The server had an error: to many todos");
    }
})

// POST /api/owners
app.post('/api/owners', (req, res) => {
    let newItem = req.body;
    newItem["id"] = autoIncrement++;
    owners.push(newItem);
    res.send(newItem);
})

// PUT /api/owners/:id
app.put('/api/owners/:id', (req, res) => {
    for(let idx = 0; idx < owners.length; idx++) {
        console.log(owners[idx])
        if(owners[idx].id === parseInt(req.params.id)){
            itemFound = true;
            owners[idx]["ownsPets"] = req.body.ownsPets
            console.log("In the loop")
            res.send(owners[idx]);
        }
    }

    res.status(404).send("404 - Item does not exist");
})

// DELETE /api/owners/:id
app.delete('/api/owners/:id', (req, res) => {
    let originalLength = owners.length;

    owners = owners.filter((ownerItem) => {
        return ownerItem.id !== parseInt(req.params.id);
    })

    if(owners.length === originalLength){
        res.send("Item already removed");
    }

    res.send("Deleted an item");
})

// GET /api/owners/:id/pets
app.get('/api/owners/:id/pets', (req, res) => {
    
})

// GET /api/owners/:id/pets/:petId

// POST /api/owners/:id/pets

// PUT /api/owners/:id/pets/:petId

// DELETE /api/owners/:id/pets/:petId


app.listen(3000, function(){
    console.log('Pets API is now listening on port 3000...');
})