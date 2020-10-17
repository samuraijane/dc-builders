const express = require('express')
const router = express.Router()

const db = require('../models')

router.get('/products', async (req, res)=>{
    const products = await db.product.findAll()
    res.send(products)
})

router.get('/products/:id', async (req, res)=>{
    const productId = parseInt(req.params.id)
    const product = await db.product.findByPk(productId)
    console.log(product)

    if(product) {
        res.send(product)
    } else {
        res.status(404).send("Product does not exist")
    }
})

router.put('/products/:id', async (req, res)=>{
    const productId = parseInt(req.params.id)
    const product = await db.product.findByPk(productId)

    // Check if product exists
    if(product) {

        // update the affected product with the whole of req.body
        const productUpdates = await db.product.update(req.body, {
            where: {
                id: productId
            },
            returning: true
        })

        // check the doc to figure out the return type from Model.update
        // https://sequelize.org/master/class/lib/model.js~Model.html#static-method-update
        res.send(productUpdates[1][0])
    } else {
        res.status(404).send("Product does not exist")
    }
})

router.post('/products', async (req, res)=>{
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

module.exports = router