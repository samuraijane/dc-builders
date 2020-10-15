const express = require("express");
const router = express.Router();
const db = require("../models");

//GET todos
router.get("/todos", async (req, res) => {
  const todos = await db.todo.findAll();
  res.send(todos);
});

// GET todos by id
router.get("/todos/:id", async (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = await db.todo.findByPk(todoId);
  console.log(todo);

  if (todo) {
    res.send(todo);
  } else {
    res.status(404).send("Todo does not exist");
  }
});

// POST creat todos
router.post("/todos", async (req, res) => {
  const { todo, isCompleted } = req.body;
  const newTodo = await db.todo.create({
    todo,
    isCompleted,
  });
  res.send(newTodo);
});

// PUT modify todo by id
router.put("/todos/:id", async (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = await db.todo.findByPk(todoId);

  if (todo) {
    todo.isCompleted = req.body.isCompleted;
    await todo.save();
    res.send(todo);
  } else {
    res.status(404).send("Todo does not exist");
  }
});

// DELETE delete todos by id
router.delete("/todos/:id", async (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = await db.todo.findByPk(todoId);

  if (todo) {
    todo.isCompleted = req.body.isCompleted;
    await todo.destroy();
    res.send("Todo item has been deleted");
  } else {
    res.status(404).send("Todo item was not deleted");
  }
});

module.exports = router;
