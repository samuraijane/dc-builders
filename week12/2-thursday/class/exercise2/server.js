var express = require("express");
var bodyParser = require("body-parser");

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
        type: "Dog",
      },
      {
        id: 2,
        name: "Felix",
        type: "Cat",
      },
    ],
  },
  {
    id: 2,
    name: "Kamilah",
    pets: [
      {
        id: 1,
        name: "Doug",
        type: "Dog",
      },
    ],
  },
];

let autoIncrement = 3;

// GET /api/owners
app.get("/api/owners", (req, res) => {
  res.send(owners);
});
// GET /api/owners/:id
app.get("/api/owners/:id", (req, res) => {
  let result = owners.filter((ownersItem) => {
    return ownersItem.id === parseInt(req.params.id);
  });

  if (result.length == 1) {
    res.send(result[0]);
  } else if (result.length == 0) {
    res.status(404).send("Owners item does not exist");
  } else {
    res.status(500).send("The server had an error: to many errors");
  }
});

// POST /api/owners
app.post("/api/owners", (req, res) => {
  console.log(req.body);
  console.log(typeof req.body);

  let newItem = req.body;
  newItem["id"] = autoIncrement++;
<<<<<<< Updated upstream

  console.log(newItem);
  owners.push(newItem);

=======

  console.log(newItem);
  owners.push(newItem);

>>>>>>> Stashed changes
  res.send(newItem);
});
// PUT /api/owners/:id
app.put("/api/owners/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params.id);

  let mutateItem;
  for (let idx = 0; idx < owners.length; idx++) {
    if (owners[idx].id === parseInt(req.params.id)) {
      owners[idx]["isCompleted"] = req.body.isCompleted;
      owners[idx]["owner"] = req.body.owner;
      res.send(owners[idx]);
    }
  }

  res.status(404).send("item does not exist");
});
<<<<<<< Updated upstream

res.send(foundID);
=======
>>>>>>> Stashed changes

// DELETE /api/owners/:id
app.delete("/api/owners/:id", (req, res) => {
  let origianlLength = owners.length;

  owners = owners.filter((owner) => {
    return owner.id !== parseInt(req.params.id);
  });
  console.log(owners);
  if (owners.length === originalLength) {
    res.send("owner already deleted");
  }
  res.send("deleted this owner");
});
// GET /api/owners/:id/pets
app.get("/api/owners/:id/pets", (req, res) => {
  let result = owners.filter((ownersItem) => {
    return ownersItem.id === parseInt(req.params.id);
  });
  console.log(result[0].pets[0].name);

  if (result.length == 1) {
    res.send(result[0]);
  } else if (result.length == 0) {
    res.status(404).send("Owners item does not exist");
  } else {
    res.status(500).send("The server had an error: to many errors");
  }
});
// GET /api/owners/:id/pets/:petId
app.get("/api/owners/:id/pets/:petId", (req, res) => {
  let id = parseInt(req.params.id);
  let foundId = owners.find((owner) => {
    return owner.id === id;
  });
  let petId = parseInt(req.params.petId);
  let foundPet = foundId.pets.find((petID) => {
    return petID.id === petId;
  });
  res.send(foundPet);
});
// POST /api/owners/:id/pets
app.post("/api/owners/:id/pets", (req, res) => {
  let id = parseInt(req.params.id);
  let foundId = owners.find((owner) => {
    return owner.id === id;
  });
  let nextPetID =
    foundId.pets.reduce((acc, curr) => {
      if (curr.id > acc) {
        return curr.id;
      }
      return acc++;
    }, 0) + 1;
  let newPet = {
    id: nextPetID,
    name: req.body.name,
    type: req.body.type,
  };
  console.log(req.body.name);
  console.log(req.body.type);
  foundId.pets.push(newPet);

  res.send(foundId.pets);
});
// PUT /api/owners/:id/pets/:petId
app.put("/api/owners/:id/pets/:petId", (req, res) => {
  const owner = owners.find((item) => item.id === parseInt(req.params.id));
  if (!owner) res.status(400).send("owner not identified");

  console.log(owner.pets);
  owner.pets[req.params.petId - 1].name = req.body.name;
  owner.pets[req.params.petId - 1].type = req.body.type;
  res.send(owner);
});
// DELETE /api/owners/:id/pets/:petId
app.delete("/api/owners/:id/pets/:petId", (req, res) => {
  const owner = owners.find((item) => item.id === parseInt(req.params.id));
  if (!owner) res.status(400).send("owner not correct");

<<<<<<< Updated upstream
  app.listen(3000, function () {
    console.log("Pets API is now listening on port 3000...");
  });
=======
app.listen(3000, function () {
  console.log("Pets API is now listening on port 3000...");
>>>>>>> Stashed changes
});
