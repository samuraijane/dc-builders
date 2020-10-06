
const express = require("express");
const app = express();
const pgp = require("pg-promise")();

const db = pgp("postgres://shayla:H3!!0p33ps@host:5432/database");

//POST CREATE A TASK
app.POST('/tasks', (req, res) => {
    res.send()
})


//GET TASKS
app.get('/tasks', (req, res) => {

})

//PATCH /tasks/:id/is_completed
app.patch('/tasks/:id/is_completed', (req, res) => {

})

//PATCH /tasks/:id/title
app.patch('tasks/:id/title', (req, res) => {

})

// DELETE /tasks/:id
app.delete('/tasks/:id', (req, res) => {

})





