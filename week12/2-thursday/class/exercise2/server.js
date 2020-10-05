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
    // console.log(`Owner List`);
    res.send(owners)
});
// GET /api/owners/:id
app.get('/api/owners/:id', (req, res) => {

    let result = owners.filter((ownerIdNum)=>{
        return ownerIdNum.id === parseInt(req.params.id)
    })

    if (result.length === 1) {
        res.send(result[0]);
    } else if (result.length === 0) {
        res.status(404).send('OWNER NOT LISTED!')
    } else {
        res.status(500).send('SERVER ERROR...')
    }
   
});

let autoIncrement = 3;
// POST /api/owners

app.post('/api/owners', (req, res) => {

    let newOwner = req.body
    newOwner["id"] = autoIncrement++

    owners.push(newOwner)
    res.send(newOwner)
});
// PUT /api/owners/:id
app.put('/api/owners/:id', (req, res) => {
    // console.log(req.params.id);
    // console.log(req.body);

    let foundItem = false

    for (let i = 0; i < owners.length; i++) {

        // console.log(owners[i])

        if(owners[i].id === parseInt(req.params.id)) {
            foundItem = true

            owners[i]["isEntered"] = req.body.isEntered
            owners[i]["pets"] = req.body.pets
            res.send(owners[i])
        }
    }
    if (!foundItem) {
        res.status(404).send('OWNER NOT IN SYSTEM!');
    };
});
// DELETE /api/owners/:id
app.delete('/api/owners/:id', (req, res) => {
    let oLength = owners.length

    owners = owners.filter((todoItem)=>{
        // as long as is not equal return everything else
        return todoItem.id !== parseInt(req.params.id)
    })

    if (owners.length === oLength){
        console.log('Already removed')
    }

    console.log('Deleted')
    // console.log(owners)

    res.send('Deleted')
    
});
// GET /api/owners/:id/pets
app.get('/api/owners/:id/pets', (req, res) => {

    let pickOwner = owners.filter((ownerIdNum)=>{
        return ownerIdNum.id === parseInt(req.params.id)
    })

    res.send(pickOwner[0].pets)
});
// GET /api/owners/:id/pets/:petId
app.get('/api/owners/:id/pets/:petId', (req, res) => {
    
    let petId = owners.filter((ownerIdNum)=>{
        return ownerIdNum.id === parseInt(req.params.id)
    })

    let petFind = petId[0].pets[parseInt(req.params.petId)-1]
       
    if(petFind === undefined ) {
        console.log('Invalid ID')
        res.status(404).send('ENTER VALID ID')
    } else {
        res.send(petFind)
    }
});

// POST /api/owners/:id/pets

let autoID = 1;
app.post('/api/owners/:id/pets', (req, res) => {

    let newPet = req.body
    newPet['id'] = autoID++;

    let ownerChoice = owners.filter((ownerIdNum)=>{
        return ownerIdNum.id === parseInt(req.params.id)
    })

    console.log('Testing')
    ownerChoice[0].pets.push(newPet)
    console.log(ownerChoice[0].pets)
    res.send(ownerChoice[0].pets)
});

// PUT /api/owners/:id/pets/:petId
// app.put('/api/owners/:id', (req, res) => {
//     console.log(req.params.id);
//     console.log(req.body);

//     let foundItem = false

//     for (let i = 0; i < owners.length; i++) {

//         console.log(owners[i])

//         if(owners[i].id === parseInt(req.params.id)) {
//             foundItem = true

//             owners[i]["isEntered"] = req.body.isEntered
//             owners[i]["pets"] = req.body.pets
//             res.send(owners[i])
//         }
//     }
//     if (!foundItem) {
//         res.status(404).send('OWNER NOT IN SYSTEM!');
//     };
// });
// DELETE /api/owners/:id/pets/:petId
// app.delete('/api/owners/:id', (req, res) => {
//     let oLength = owners.length

//     owners = owners.filter((todoItem)=>{
//         // as long as is not equal return everything else
//         return todoItem.id !== parseInt(req.params.id)
//     })

//     if (owners.length === oLength){
//         console.log('Already removed')
//     }
//     //
//     let petId = owners.filter((ownerIdNum)=>{
//         return ownerIdNum.id === parseInt(req.params.id)
//     })

//     let petFind = petId[0].pets[parseInt(req.params.petId)-1]
       
//     if(petFind === undefined ) {
//         console.log('Invalid ID')
//         res.status(404).send('ENTER VALID ID')
//     } else {
//         res.send(petFind)
//     }

//     //
//     console.log('Deleted')
//     console.log(owners)

//     res.send('Deleted')
    
// });

app.listen(3000, function(){
    console.log('Pets API is now listening on port 3000...');
});