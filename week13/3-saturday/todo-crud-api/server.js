
const express = require("express");
const app = express();
const pgp = require("pg-promise")();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const db = pgp("postgres://shayla:H3!!0p33ps@host:5432/database");

//POST CREATE A TASK
app.post('/tasks', function (req, res) {
    const title = req.body.title; //Insert into tasks into the title column 
    db.none("INSERT INTO tasks (title) VALUES ($1)", [newTaskTitle]).then(() => {
        res.send(`Tasks "${newTaskTitle}" was created`);
    });
});


//GET TASKS
app.get('/tasks', function (req, res) {

})

//PATCH /tasks/:id/is_completed
app.patch('/tasks/:id/is_completed', function (req, res) {

})

//PATCH /tasks/:id/title
app.patch('tasks/:id/title', (req, res) => {

})

// DELETE /tasks/:id
app.delete('/tasks/:id', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Express application is running on port ${PORT}`);
});





