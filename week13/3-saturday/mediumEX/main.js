require("dotenv").config();

const express = require("express");
var bodyParser = require("body-parser");
const pgp = require("pg-promise")();

const {DB_LOCAL,DB_PASSWORD,DB_NAME,DB_USER, PORT } = require("./config");

const db = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_LOCAL}/${DB_NAME}`)

const app = express();
app.use(bodyParser.json());
const { response } = require("express");


app.post("/tasks",  (req, res) => {
    const newTask = req.body.title;
    console.log(newTask);
    db.none("INSERT INTO tasks (title) VALUES($1)", [newTask])
        .then(()=>{
            res.send(`New task '${newTask}' created`)
        })
        .catch(error => console.log(error));
});


app.get("/tasks", (req, res) => {
    console.log(res);
    db.any("SELECT * from tasks")
        .then(tasks => {
            console.log(tasks),
            res.send(tasks)
        })
        .catch(error => console.log(error));
});


app.patch("/tasks/:id/is_completed", function(req, res){
    const taskID = req.params.id;
    const completed = req.body.is_completed;
    console.log(taskID); 
    console.log(completed);
    db.none("UPDATE tasks SET is_completed = $1 WHERE id = $2", [completed, taskID])
        .then(()=>{
            const taskDone = completed == "FALSE" ? "still needs to be done..." : "has been done!";
            console.log(`Task #${taskID} ${taskDone}`),
            res.send(`Task #${taskID} ${taskDone}`)
        })
        .catch(error => console.log(error));
});

app.patch("/tasks/:id/title", function(req, res){
    const taskID = req.params.id;
    const changeTask = req.body.title;
    console.log(taskID); 
    console.log(changeTask);
    db.none("UPDATE tasks SET title = $1 WHERE id = $2", [changeTask, taskID])
        .then(()=>{
            console.log(`Task #${taskID} has been changed to: '${changeTask}'.`),
            res.send(`Task #${taskID} has been changed to: '${changeTask}'.`)
        })
        .catch(error => console.log(error));
});



app.delete("/tasks/:id", (req, res) => {
    const taskID = req.params.id;
    db.none("DELETE FROM tasks WHERE id = $1", [taskID])
        .then(() =>
        console.log(`${taskID} deleted`),
        res.send(`${taskID} was deleted`)
        );
  });

app.listen(PORT, function() {
    console.log(`The server at '${PORT}' is listening.`);
});