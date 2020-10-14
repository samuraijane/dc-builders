const express = require('express');

const db = require('../models')

const router = express.Router();

// router.get('/products', (req,res) =>{
//     res.send("great")

// })


router.get('/products', async (req,res) =>{
    const products = await db.product.findAll()
    res.send(products)

})

router.get('/products/:id', async (req,res) =>{
    const productID = parseInt(req.params.id)
    const product = await db.product.findByPk(productID)
    console.log(product)

    if(product) {
        res.send(product)
    } else {
        res.status(404).send("Product does not exists")
    }

})

router.put('/products/:id', async (req,res) =>{
    const productID = parseInt(req.params.id)
    const product = await db.product.findByPk(productID)
    console.log(product)

    if(product) {
        product.cost = req.body.cost
        await product.save()
        res.send(product)
    } else {
        res.status(404).send("Product does not exsists")
    }

})


router.post('/products', async (req,res) =>{

    const {name, cost, stock, description, sale} = req.body

    const newProduct =  await db.product.create({
        name,
        cost,
        stock,
        description,
        sale
    })

    res.send(newProduct)

})

module.exports = router