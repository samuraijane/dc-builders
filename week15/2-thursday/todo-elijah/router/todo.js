const express = require('express')
// const { DataTypes } = require('sequelize/types')
const router = express.Router()

const db = require('../models')

router.get('/todos', async (req, res) => {
    const toDos = await db.toDo.findAll()
    res.send(toDos)
})
