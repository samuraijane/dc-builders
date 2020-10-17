const express = require("express");
const router = express.Router();
// const db = require("../models");
router.get("/messages", (req, res) => {
  console.log("show me messages");
  res.end();
});

var todoList = [
  {
    id: 1,
    todo: "Implement a REST API",
  },
  {
    id: 2,
    todo: "Get Groceries",
  },
];

let autoIncrement = 3;

// GET /api/todos
router.get("/api/todos", (req, res) => {
  res.send(todoList);
});

// GET /api/todos/:id
router.get("/api/todos/:id", (req, res) => {
  // This could just as easily be find
  let result = todoList.filter((todoItem) => {
    return todoItem.id === parseInt(req.params.id);
  });

  if (result.length === 1) {
    res.send(result[0]);
  } else if (result.length === 0) {
    res.status(404).send("todo list item doesn't exist");
  } else {
    res.status(500).send("The server had an error: to many todos");
  }
});

// POST /api/todos
router.post("/api/todos", (req, res) => {
  // console.log(req.body)
  // console.log(typeof req.body)

  let newItem = req.body;
  newItem["id"] = autoIncrement++;

  todoList.push(newItem);

  res.send(newItem);
});

// PUT /api/todos/:id
router.put("/api/todos/:id", (req, res) => {
  // console.log(req.body)
  // console.log(req.params.id)

  // This way is much cleaner than what we did in class
  let itemIndex = todoList.findIndex((todoItem) => {
    return todoItem.id === parseInt(req.params.id);
  });

  if (itemIndex >= 0) {
    // Overwrite the id in the body with the one from the URL
    req.body.id = todoList[itemIndex].id;
    todoList[itemIndex] = req.body;
    res.send(todoList[itemIndex]);
  } else {
    res.status(404).send("Item does not exist");
  }
});
router.get("/api/todos/:id", async (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = await db.task.findByPk(taskId);
  if (task) {
    res.send(task);
  } else {
    res.status(404).send("task does not exist, please enter correct ID");
  }
});

// DELETE /api/todos/:id
router.delete("/api/todos/:id", (req, res) => {
  let originalLength = todoList.length;

  todoList = todoList.filter((todoItem) => {
    return todoItem.id !== parseInt(req.params.id);
  });

  console.log(todoList);

  if (todoList.length === originalLength) {
    res.send("Item already removed");
  }

  res.send("Deleted this item");
});

router.put("/api/todos/:id", async (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = await db.task.findByPk(taskId);
  if (task) {
    task.name = req.body.name;
    task.date = req.body.date;
    task.completed = req.body.completed;
    await task.save();
    res.send(task);
  } else res.status(404).send("task does not exist, please enter correct task");
});

router.post("/api", async (req, res) => {
  const { name, date, completed } = req.body;
  const newTask = await db.task.create({
    name,
    date,
    completed,
  });
  res.send("challenge accepted");
});

module.exports = router;
