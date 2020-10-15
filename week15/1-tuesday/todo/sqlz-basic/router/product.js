const express = require('express')
// const { DataTypes } = require('sequelize/types')
const router = express.Router()

const db = require('../models')

router.get('/products', (req, res) => {
    res.send("great")
})

router.post('/products', async (req, res) => {
    // const newProduct = await db.product.create({
    //     name: "DC T Shirt",
    //     cost: 25.00,
    //     stock: 100,
    //     description: "A nice jersey shirt with relaxed fit",
    //     sale: false
    // })
    // res.send(newProduct)
})

module.exports = router;
