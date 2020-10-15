const express = require('express')
// const { DataTypes } = require('sequelize/types')
const router = express.Router()

const db = require('../models')

router.get('/products', async (req, res) => {
    const products = await db.product.findAll()
    res.send(products)
})

router.get('/products/:id', async (req, res) => {
    const productId = parseInt(req.params.id)
    const product = await db.product.findByPk(productId)
    console.log(product)
    if(product) {
        res.send(product)
    } else {
        res.status(404).send("Product does not exist")
    }
})

router.put('/products/:id', async (req, res) => {
    const productId = parseInt(req.params.id)
    const product = await db.product.findByPk(productId)

    if(product) {
        product.cost = req.body.cost
        await product.save()
        res.send(product)
    } else {
        res.status(404).send("Product does not exist")
    }
})

router.post('/products', async (req, res) => {
    const {name, cost, stock, description, sale} = req.body

    const newProduct = await db.product.create({
        name,
        cost,
        stock,
        description,
        sale
    })
    res.send(newProduct)
})

module.exports = router;
