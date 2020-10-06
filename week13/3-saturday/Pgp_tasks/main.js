const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const db = pgp("postgres://localhost:5432/todo_app");
const app = express();
const PORT = 3000;

// db.many("SELECT * from TASKS").then(info => {
//     console.log(info);
// })
// .catch(error => console.log(error));

app.get('/tasks', (res, rej) => {
    db.many("SELECT * from TASKS").then(tasks => {
        res.send(tasks)
    })
})

app.post('/tasks', (res, rej) =>{
    const newTask = req.body.title;
    db.none("INSERT INTO tasks (tile) VALUES ($1);", [
        newTask
    ])
    .then(()=> res.send("Task was created"))
})

app.patch("/tasks/:id/title", (req, res) => {
    const taskId = req.params.id;
    const taskTitle = req.body.title;
    db.none("UPDATE tasks SET title = $1 WHERE id = $2", [
      taskTitle,
      taskId,
    ]).then(() => {
      res.send(`Task ${taskId} is updated to "${taskTitle}"`);
    });
  });
  
  // DELETE a task
  app.delete("/tasks/:id", (req, res) => {
    const taskId = req.params.id;
    db.none("DELETE FROM tasks WHERE id = $1", [taskId]).then(() =>
      res.send(`Task ${taskId} was deleted`)
    );
  });
  
  app.listen(PORT, () => {
    console.log(`Express application is running on port ${PORT}`);
  });