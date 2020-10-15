const express = require('express');
const router = express.Router();

const db = require('../models');
module.exports = router;

router.get('/todos', async (req, res) => {
    const todoList = await db.Todos.findAll();
    res.send(todoList);
})

router.get('/todos/:id', async (req, res) => {
    const todoId = parseInt(req.params.id)
    const todo = await db.Todos.findByPk(todoId)
    console.log(todo);

    if(todo) {
        res.send(todo)
    } else {
        res.status(404).send("Task does not exist")
    }
})

router.post('/todos', async (req, res) => {
    const { todo } = req.body;

    const newTask = await db.Todos.create({
        todo
    })

    res.send("Task added to list.")
})

// router.put('/todos/:id', async (req, res) => {

// })

// router.delete('/todos/:id', async (req, res) => {
//     const todoId = parseInt(req.params.id);
//     const deletedTask = await Todos.destroy({
//         where: {
//             id
//         }
//     })
//     console.log(deletedTask);

//     if(todoId) {
//         res.send("Task deleted")
//     } else {
//         res.status(404).send("Task does not exist")
//     }

// });

