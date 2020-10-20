const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/orders', async function(req, res){
    let allOrders = await db.orders.findAll();
    res.send(allOrders);
})





module.exports = router;