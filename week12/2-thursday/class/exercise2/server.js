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

app.get('/api/owners', function(req, res) {
    res.send(owners);
})

// GET /api/owners/:id

app.get('/api/owners/:id', function(req, res) {
    console.log(req.params.id);

    let result = owners.filter((ownerItem) => { //result could be of length 1 or 0
        return ownerItem.id === parseInt(req.params.id);
    })

    if (result.length === 1) {
        res.send(result[0]);
    }
    else if (result.length === 0) {
        res.status(404).send("owner doesn't exist");
    }
    else {
        res.status(500).send("the server had an error."); //two todos with same index
    }
})

// POST /api/owners

app.post('/api/owners', function(req, res) {
    console.log(req.body); 
    
    let autoIncrement = 3;
    let newOwner = req.body;
    newOwner["id"] = autoIncrement++; //setting newItem id to autoIncrement which is 2 and then ++ will add one to autoIncrement after that

    owners.push(newOwner);
    res.send(newOwner);
})

// PUT /api/owners/:id

app.put('/api/owners/:id', function(req, res) {
    console.log(req.body);
    console.log(req.params.id);

    for (let i=0; i<owners.length; i++) {
        if(owners[i].id === parseInt(req.params.id)) {
           owners[i]["pets"] = req.body.pets; 
           res.send(owners[i]);
        }
    }

    res.status(404).send("The owner doesn't exist");
})

// DELETE /api/owners/:id

app.delete('/api/owners/:id', function(req, res){
    console.log(req.params.id);

    let origLength = owners.length;

    owners = owners.filter((ownerItem) => {
        return ownerItem.id !== parseInt(req.params.id);
    })

    if(owners.length === origLength){
        return res.send("This owner was already removed")
    } else {
        return res.send("Owner deleted")
    }
})

// GET /api/owners/:id/pets

app.get('/api/owners/:id/pets', function(req, res) {
    console.log(req.params.id);

    for (let i=0; i<owners.length; i++) {
        if(owners[i].id === parseInt(req.params.id)) {
            return res.send(owners[i].pets)
        }
    }
    return res.status(404).send("There is no owner with that id");
})

// GET /api/owners/:id/pets/:petId

app.get('/api/owners/:id/pets/:petId', function(req, res) {
    console.log(req.params.id);
    console.log(req.params.petId);

    for (let i=0; i<owners.length; i++) {
        if(owners[i].id === parseInt(req.params.id)) {
            let result = owners[i].pets.filter((petItem) => { 
                return petItem.id === parseInt(req.params.petId);
            })
            if (result.length === 1) {
                return res.send(result[0]);
            }
            else if (result.length === 0) {
                return res.status(404).send("pet doesn't exist");
            }
            else {
                return res.status(500).send("the server had an error.");  
            }
        }
    }
    return res.status(404).send("There is no owner with that id");
})

// POST /api/owners/:id/pets

app.post('/api/owners/:id/pets', function(req, res){
    console.log(req.params.id);
    console.log(req.body);

    for (let i=0; i<owners.length; i++){
        if (owners[i].id === parseInt(req.params.id)){
            let autoIncrement = owners[i].pets.length + 1;
            let newPet = req.body;
            newPet["id"] = autoIncrement++;
            owners[i].pets.push(newPet);
            return res.send(newPet);
        }
    }

    return res.status(404).send("There is no owner with that id");

})

// PUT /api/owners/:id/pets/:petId

app.put('/api/owners/:id/pets/:petId', function(req, res){
    console.log(req.params.id);
    console.log(req.params.petId);
    console.log(req.body);

    for (let i=0; i<owners.length; i++){

        let givenPets = owners[i].pets;

        let indexByPetId = givenPets.findIndex((pet) => {return pet.id === parseInt(req.params.petId)});
        console.log(indexByPetId);

        if (owners[i].id === parseInt(req.params.id)){
            let result = givenPets.filter((petItem) => { 
                return petItem.id === parseInt(req.params.petId);
            })

            if (result.length === 1) {
                result[0] = req.body;
                givenPets[indexByPetId] = result[0]; 
                return res.send(result[0]);
            }
            else if (result.length === 0) {
                return res.status(404).send("pet doesn't exist");
            }
            else {
                return res.status(500).send("the server had an error.");  
            }
        }
    }

    return res.status(404).send("There is no owner with that id"); 
})

// DELETE /api/owners/:id/pets/:petId

app.delete('/api/owners/:id/pets/:petId', function(req, res){
    console.log(req.params.id);
    console.log(req.params.petId);

    for (let i=0; i<owners.length; i++){
        if (owners[i].id === parseInt(req.params.id)){
            
            let givenPets = owners[i].pets;
            let origLength = givenPets.length;

            givenPets = givenPets.filter((petItem) => {
            return petItem.id !== parseInt(req.params.petId);
            })

            if(givenPets.length === origLength){
                return res.send("This pet was already removed")
            } else {
                return res.send("Pet deleted")
            }
        }
    }

    return res.status(404).send("There is no owner with that id"); 
})

app.listen(3000, function(){
    console.log('Pets API is now listening on port 3000...');
})