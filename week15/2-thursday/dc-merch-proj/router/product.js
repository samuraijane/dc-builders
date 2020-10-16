// all product related API endpoints are here
//use npx sequelize-cli init command to get models, config, migration, and seeders folders. update database info in config.JSON, this sets up the database for us

const express = require('express');
const router = express.Router();

const db = require('../models') //models is one directory out now //anything after db is coming from index.js file in models folder

router.get('/products', async (req, res) => {   //all requests to database are promises so use async await
    const products = await db.Product.findAll()
    res.send(products)
})

router.get('/products/:id', async (req, res) => {
    const productId = parseInt(req.params.id); //this is a string so need to make an integer
    const product = await db.Product.findByPk(productId);
    console.log(product); //this is returning a Product model not just the object

    if(product) {
        res.send(product);
    }
    else {
        res.status(404).send("Product does not exist");
    }
})

router.post('/products', async (req, res) => {
    const {name, cost, stock, description, sale} = req.body;

    const newProduct = await db.Product.create({
        name,
        cost,
        stock, 
        description,
        sale
        // name: "DC T-Shirt",
        // cost: 25.00,  
        // stock: "yes",
        // description: "A nice jersey tee",
        // sale: false 
    })
    
    res.send(newProduct);
})

router.put('/products/:id', async (req, res) => {
    const productId = parseInt(req.params.id); //this is a string so need to make an integer
    const product = await db.Product.findByPk(productId);

    if(product) {
        product.cost = req.body.cost; //product is the variable not the model name
        await product.save();
        res.send(product);
    }
    else {
        res.status(404).send("Product does not exist");
    }
})

module.exports = router;