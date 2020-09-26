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

let autoIncrement = 3

// GET /api/owners
app.get('/api/owners', (req, res) => {
    res.send(owners)
})

// GET /api/owners/:id
app.get('/api/owners/:id', (req, res) => {
    let result = owners.filter( (eachOwner) => {
        return eachOwner.id === parseInt(req.params.id)
    })

    if (result.length === 1) {
        res.send(result[0])
    } else if (result.length === 0) {
        res.status(404).send("This owner does not exist")
    } else {
        res.status(500).send("The server had an error: too many owners")
    }
})

// POST /api/owners
app.post('/api/owners', (req, res) => {
    console.log(req.body)
    console.log(typeof req.body)
    let newItem = req.body
    newItem["id"] = autoIncrement++
    owners.push(newItem)
    res.send(newItem)
})


// PUT /api/owners/:id
app.put('/api/owners/:id', (req, res) => {
    for (let idx = 0; idx < owners.length; idx++) {
        if (owners[idx].id === parseInt(req.params.id)) {
            owners[idx]["name"] = req.body.name
            res.send(owners[idx])
        }   
    }
    res.send()
})



// DELETE /api/owners/:id
app.delete('/api/owners/:id', (req, res) => {
    owners = owners.filter( (eachOwner) => {
        return eachOwner.id !== parseInt(req.params.id)
    })
    res.send("Owner deleted")
})



// GET /api/owners/:id/pets
app.get('/api/owners/:id/pets', (req, res) => {
    let theOwner = owners.filter( (eachOwner) => {
        let thePets = 
    })
})


// GET /api/owners/:id/pets/:petId

// POST /api/owners/:id/pets

// PUT /api/owners/:id/pets/:petId

// DELETE /api/owners/:id/pets/:petId


app.listen(3000, function(){
    console.log('Pets API is now listening on port 3000...');
})