const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const db = pgp("postgres://localhost:5432/todo_app");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// CREATE a task
app.post("/tasks", (req, res) => {
  const newTaskTitle = req.body.title;
  db.none("INSERT INTO tasks (title) VALUES ($1)", [newTaskTitle]).then(() => {
    res.send(`Task "${newTaskTitle}" was created`);
  });
});

// READ all tasks
app.get("/tasks", (_, res) => {
  db.any("SELECT * from TASKS").then((tasks) => res.send(tasks));
});

// UPDATE if a task is completed
app.patch("/tasks/:id/is_completed", (req, res) => {
  const taskId = req.params.id;
  const taskIsCompleted = req.body.is_completed;
  db.none("UPDATE tasks SET is_completed = $1 WHERE id = $2", [
    taskIsCompleted,
    taskId,
  ]).then(() => {
    const result = taskIsCompleted ? "completed" : "not completed";
    res.send(`Task ${taskId} is ${result} (${taskIsCompleted})`);
  });
});

// UPDATE a task's title
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
