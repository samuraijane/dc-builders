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
                id: 3,
                name: "Doug",
                type: "Dog"
            }
        ]
    }
];

// I cheated here and made each pet have a unique ID ;)
let ownerId = 3
let petId = 4

// Helper function
function getOwnerById(ownerId) {
    return owners.find( (owner) => owner.id === parseInt(ownerId))
}

function getPetById(owner, petId) {
    if (owner.pets){
        return owner.pets.find( (pet) => pet.id === parseInt(petId))
    }
    return undefined
}

// GET /api/owners
app.get('/api/owners', (req, res) => {
    res.send(owners)
})

// GET /api/owners/:id
app.get('/api/owners/:id', (req, res) => {
    // This could just as easily be `find` instead of `filter`
    let result = owners.filter( (owner) => {
        return owner.id === parseInt(req.params.id)
    })

    if (result.length === 1) {
        res.send(result[0])
    } else if (result.length === 0) {
        res.status(404).send("CLIENT ERROR: Owner doesn't exist.")
    } else {
        res.status(500).send("SERVER ERROR: Multiple records for ID.")
    }
})

// POST /api/owners
app.post('/api/owners', (req, res) => {
    let newOwner = req.body
    newOwner["id"] = ownerId++

    // In a real application, we would need to check nested objects
    // like Pets and make sure they exist or create them in their own table.

    owners.push(newOwner)

    res.send(newOwner)
})

// PUT /api/owners/:id
app.put('/api/owners/:id', (req, res) => {

    let ownerIndex = owners.findIndex( (owner) => {
        return owner.id === parseInt(req.params.id)
    }) 

    if(ownerIndex >= 0) {
        // Overwrite the id in the body with the one from the URL
        req.body.id = owners[ownerIndex].id
        owners[ownerIndex] = req.body  
        res.send(owners[ownerIndex])
    } else {
        res.status(404).send("ERROR: Owner does not exist") 
    }
})

// DELETE /api/owners/:id
app.delete('/api/owners/:id', (req, res) => {
    let originalLength = owners.length

    owners = owners.filter( (owner) => {
        return owner.id !== parseInt(req.params.id)
    })

    if (owners.length === originalLength){
        // Changed this to 404, which is technically right: 
        // https://stackoverflow.com/questions/4088350/is-rest-delete-really-idempotent
        res.status(404).send("ERROR: Owner does not exist")
    }

    res.send("SUCCESS: Deleted this owner")
})

// GET /api/owners/:id/pets
app.get('/api/owners/:id/pets', (req, res) => {

    owner = getOwnerById(req.params.id)

    if(!owner){
        res.status(404).send('CLIENT ERROR: Owner does not exist')
    }
    else if(!owner.pets) {
        res.send([])
    } 
    else {
        res.send(owner.pets)
    }
})

// GET /api/owners/:id/pets/:petId
app.get('/api/owners/:id/pets/:petId', (req, res) => {

    owner = getOwnerById(req.params.id)
    if(!owner){
        res.status(404).send('CLIENT ERROR: Owner does not exist')
    }

    pet = getPetById(owner, req.params.petId)
    if(!pet) {
        res.status(404).send('CLIENT ERROR: Pet does not exist')
    } 
    else {
        res.send(pet)
    }
})

// POST /api/owners/:id/pets
app.post('/api/owners/:id/pets', (req, res) => {

    owner = getOwnerById(req.params.id)
    if(!owner){
        res.status(404).send('CLIENT ERROR: Owner does not exist')
    }

    let newPet = req.body
    newPet["id"] = petId++

    owner.pets.push(newPet)

    res.send(newPet)
})

// PUT /api/owners/:id/pets/:petId
app.put('/api/owners/:id/pets/:petId', (req, res) => {

    owner = getOwnerById(req.params.id)
    if(!owner){
        res.status(404).send('CLIENT ERROR: Owner does not exist')
    }
    else if(!owner.pets){
        res.status(404).send('CLIENT ERROR: Owner does not have any pets')
    }

    let petIndex = owner.pets.findIndex( pet =>  pet.id === parseInt(req.params.petId)) 

    if(petIndex >= 0) {
        // Overwrite the id in the body with the one from the URL
        req.body.id = owner.pets[petIndex].id
        owner.pets[petIndex] = req.body  
        res.send(owner.pets[petIndex])
    } else {
        res.status(404).send("ERROR: Pet does not exist") 
    }
})

// DELETE /api/owners/:id/pets/:petId
app.delete('/api/owners/:id/pets/:petId', (req, res) => {
    
    owner = getOwnerById(req.params.id)
    if(!owner){
        res.status(404).send('CLIENT ERROR: Owner does not exist')
    }

    pet = getPetById(owner, req.params.petId)
    if(!pet) {
        res.status(404).send('CLIENT ERROR: Pet does not exist')
    } 
    else {
        owner.pets = owner.pets.filter( (pet) => {
            return pet.id !== parseInt(req.params.petId)
        })
        res.send("SUCCESS: Deleted this pet")
    }
})

app.listen(3000, function(){
    console.log('Pets API is now listening on port 3000...');
})