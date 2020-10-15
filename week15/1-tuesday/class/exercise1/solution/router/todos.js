const express = require('express');
const router = express.Router();

const db = require('../models');
module.exports = router;

// GET /api/todos
router.get('/todos', async (req, res) => {
    const todos = await db.Todo.findAll()
    res.send(todos)
})

// POST /api/todos
router.post('/todos', async (req, res) => {

    const {todo} = req.body;
    const newTodo = await db.Todo.create({
        todo,
    })
    res.send(newTodo)
})

// // PUT /api/todos/:id

router.put('/todos/:id', async (req, res) => {
    let todoId = parseInt(req.params.id);

    const todoUpdated = await db.Todo.update({ isCompleted: true }, {
        where: {
        id: todoId
        }
    });

    console.log("this is from the PUT: ", todoUpdated);
    res.send(todoUpdated);

})

// DELETE /api/todos/:id
router.delete('/todos/:id', async (req, res) => {
    let todoId = parseInt(req.params.id);
    let todoDeleted = req.body;

    await db.Todo.destroy({
        where: {
        id: todoId
        }
    });
    console.log("This is from delete", todoDeleted);
    res.send(todoDeleted);
})