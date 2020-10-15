const express = require('express')
const db = require('../models')
const router = express.Router()
// const { DataTypes } = require('sequelize/types')


router.get('/todos', async (req, res) => {
    const toDos = await db.toDo.findAll()
    res.send(toDos)
})
