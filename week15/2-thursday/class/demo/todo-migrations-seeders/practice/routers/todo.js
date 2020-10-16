const express = require('express');
const router = express.Router();
const db = require('../models')


// GET /api/todos
router.get('/todos', async (req, res) => {
    let todoList = await db.todo.findAll()
    res.send(todoList)
})

// GET /api/todos/:id
router.get('/todos/:id', async (req, res) => {

    let todoID = parseInt(req.params.id)

    const todo = await db.todo.findByPk(todoID)

    if(todo) {
        res.send(todo)
    } else {
        res.status(404).send("Could not find item")
    }
})

// POST /api/todos
router.post('/todos', async (req, res) => {
    // console.log(req.body)
    // console.log(typeof req.body)

    let {todo, isCompleted} = req.body
    
    let thisTodo = await db.todo.create({
        todo,
        isCompleted
    })

    res.send(thisTodo)
})

// PUT /api/todos/:id
router.put('/todos/:id', async (req, res) => {
    let todoID = parseInt(req.params.id)

    const todo = await db.todo.findByPk(todoID)

    if(todo) {
        todo.isCompleted = req.body.isCompleted
        todo.todo = req.body.todo
        await todo.save()
        res.send("Updated this item")
    } else {
        res.status(404).send("Could not find item")
    }
})

// DELETE /api/todos/:id
router.delete('/todos/:id', async (req, res) => {
    let todoID = parseInt(req.params.id)

    const todo = await db.todo.findByPk(todoID)

    if(todo) {
        await todo.destroy()
        res.send("Deleted this item")
    } else {
        res.status(404).send("Could not delete item")
    }
})

module.exports = router;