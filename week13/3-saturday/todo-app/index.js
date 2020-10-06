
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pgp = require('pg-promise')();
const db = pgp('postgres://crawdad16@localhost:5432/todo_app');
const PORT = 3000; 

app.use(bodyParser.json());

// CREATE A TASK
app.post("/tasks", (req, res) => {
    const newTaskTitle = req.body.title;
    db.none('INSERT INTO tasks (title) VALUES ($1)', [newTaskTitle])
        .then(() => {
            res.send(`Task "${newTaskTitle}" was created`);
        })
        .catch(error => res.send(error))
  });


// READ ALL TASKS

app.get("/tasks", (req, res) => {
    db.any('SELECT * FROM tasks')
        .then(tasks => res.send(tasks))
        .catch(error => res.send(error))
});

// UPDATE IF TASK COMPLETED

app.patch("/tasks/:id/is_completed", (req, res) => {
    const taskId = req.params.id;
    const taskIsCompleted = req.body.is_completed;
    console.log(taskIsCompleted);
    db.none('UPDATE tasks SET is_completed = $1 WHERE id = $2', [taskIsCompleted, taskId])
        .then(() => {
            res.send(`Task ${taskId} is updated to "${taskIsCompleted}"`);
        })
        .catch(error => res.send(error))
});

// UPDATE TASK TITLE

app.patch("/tasks/:id/title", (req, res) => {
    const taskId = req.params.id;
    const taskTitle = req.body.title;
    db.none('UPDATE tasks SET title = $1 WHERE id = $2', [taskTitle, taskId])
        .then(() => {
            res.send(`Task ${taskId}'s title is updated to "${taskTitle}"`)
        })
        .catch(error => res.send(error))
})

// DELETE A TASK
app.delete("/tasks/:id", (req, res) => {
    const taskId = req.params.id;
    db.none('DELETE FROM tasks WHERE id = $1', [taskId])
        .then(() => {
            res.send(`Task ${taskId} was deleted`)
        })
        .catch(error => res.send(error))
})

app.listen(PORT, () => {
    console.log(`Express application is running on port ${PORT}`);
  });