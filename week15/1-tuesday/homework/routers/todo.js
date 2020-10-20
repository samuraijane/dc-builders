const express = require('express');
const router = express.Router();

const db = require('../models');
//const todo = require('../models/todo');
//const todo = require('../models/todo');



router.get('/todos', async function(req, res){
    let allTasks = await db.todo.findAll();
    res.send(allTasks);
    console.log("Get Method")
})

router.get('/todos/:id', async function(req,res){
    let todoID = parseInt(req.params.id)

    const todo = await db.todo.findByPk(todoID)

    if(todo){
        res.send(todo)
    } else {
        res.status(404).send("Could not find todo task")
    }
    console.log("get id")
})

router.post('/todos', async function(req, res){
    const { task, is_Completed} = req.body;
    const newTask = await db.todo.create({
        task,
        is_Completed
    })
    console.log("Post")
    res.send(`New task created!`)
})

router.put('/todos/:id', async function(req, res){
    let todoId = parseInt(req.params.id)


    const changeTodo = await db.todo.findByPk(todoId)

    if(changeTodo){
        changeTodo.is_Completed = req.body.is_Completed;
        changeTodo.task = req.body.task
        await changeTodo.save();

        res.send("Updated Todo")

    }else {
        res.status(404).send("Unable to find todo item")
    }

})






router.delete('/todos/:id', async function(req, res) {
    let todoId = parseInt(req.params.id)
    const deletedTask = await db.todo.findByPk(todoId)

    if(deletedTask){
        await deletedTask.destroy()
        res.send("Deleted")
    } else {
        res.status(404).send('Could not find task')
    }

    
    console.log("Delete")
})


module.exports = router;