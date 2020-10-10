//const { default: ModelManager } = require("sequelize/types/lib/model-manager");
const db = require("../models");
const express = require('express')
const router = express.Router()





router.post('/books', async function(req, res) {
    const { author } = req.body;
    
    const newUser = await db.Author.create({
        name: author,
    })
    
    // Send back the new user's ID in the response:
    res.json({
        id: newUser.id
    });


});

module.exports = router;