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

let autoIncrement = owners.length;
// GET /api/owners
app.get('/api/owners', (req, res) => {
    res.send(owners);
})
// GET /api/owners/:id
app.get('/api/owners/:id', (req, res) => {
    let result = owners.filter((owner) => {
        return owner.id === parseInt(req.params.id)
    })

    if (result.length === 1){
        res.send(result[0]);
    } else if (result.length === 0){
        res.status(404).send("Error: item not found")
    } else if (result.length > 1){
        res.status(500).send("Error: too many items");
    }

})
// POST /api/owners
app.post('/api/owners', (req, res) => {
    let newItem = req.body;
    newItem["id"] = ++autoIncrement
    owners.push(newItem);
    res.send();
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