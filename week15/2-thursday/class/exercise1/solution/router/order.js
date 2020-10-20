const express = require('express')
const router = express.Router()

const db = require('../models')

router.get('/orders', async (req, res)=>{
    const orders = await db.order.findAll()
    res.send(orders)
})

router.get('/orders/:id', async (req, res)=>{
    const orderId = parseInt(req.params.id)
    const order = await db.order.findByPk(orderId, {include: db.product})
    console.log(order)

    if(order) {
        res.send(order)
    } else {
        res.status(404).send("Order does not exist")
    }
})

// No PUT, for simplicity, we'll assume orders cannot be changed retroactively

router.post('/orders', async (req, res)=>{
    const {productId, quantity, address} = req.body

    // Check that the Product ID is valid
    const product = await db.product.findByPk(productId)

    if(!product){
        res.status(422).send("Invalid Product ID")
    }

    const totalCost = product.cost * quantity

    const newOrder = await db.order.create({
        productId,
        quantity,
        totalCost,
        address
    })

    res.send(newOrder)
})

module.exports = router