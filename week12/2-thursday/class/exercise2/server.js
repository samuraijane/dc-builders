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

// GET /api/owners
app.get("/api/owners", function (req, res) {
  res.send(JSON.stringify(owners));
});

// GET /api/owners/:id
app.get("/api/owners/:id", function (req, res) {
  let myOwner = owners.find((indvOwner) => {
    console.log(indvOwner);
    return req.params.id == indvOwner.id;
  });
  if (myOwner) {
    res.send(myOwner);
  } else {
    res.status(404).send("owner not found");
  }
});

// POST /api/owners

// PUT /api/owners/:id

// DELETE /api/owners/:id

// GET /api/owners/:id/pets

// GET /api/owners/:id/pets/:petId

// POST /api/owners/:id/pets

// PUT /api/owners/:id/pets/:petId

// DELETE /api/owners/:id/pets/:petId

app.listen(3000, function () {
  console.log("Pets API is now listening on port 3000...");
});
