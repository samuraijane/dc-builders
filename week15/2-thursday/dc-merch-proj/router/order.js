// all product related API endpoints are here
//use npx sequelize-cli init command to get models, config, migration, and seeders folders. update database info in config.JSON, this sets up the database for us

const express = require('express');
const router = express.Router();

const db = require('../models') //models is one directory out now //anything after db is coming from index.js file in models folder

router.get('/orders', async (req, res) => {   //all requests to database are promises so use async await
    console.log("hello world");
    const orders = await db.Order.findAll({
        include: [{    // this isn't working
            model: db.Product,
            where: {id: Order.productId}
        }]
    })
    res.send(orders)
})

// router.get('/orders/:id', async (req, res) => {
//     const orderId = parseInt(req.params.id); //this is a string so need to make an integer
//     const order = await db.Order.findByPk(orderId);
//     console.log(order); //this is returning a Product model not just the object

//     if(order) {
//         res.send(order);
//     }
//     else {
//         res.status(404).send("Order does not exist");
//     }
// })

// router.post('/orders', async (req, res) => {
//     const {quantity, customer, totalCost} = req.body;

//     const newOrder = await db.Order.create({
//         quantity,
//         customer,
//         totalCost
//     })
    
//     res.send(newOrder);
// })

// router.put('/orders/:id', async (req, res) => {
//     const orderId = parseInt(req.params.id); //this is a string so need to make an integer
//     const order = await db.Order.findByPk(orderId);

//     if(order) {
//         order.cost = req.body.cost; //product is the variable not the model name
//         await order.save();
//         res.send(order);
//     }
//     else {
//         res.status(404).send("Order does not exist");
//     }
// })

module.exports = router;