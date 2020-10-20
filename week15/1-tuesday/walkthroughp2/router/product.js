const express = require('express')
const router = express.Router();

router.get('/products', (req, res) => {
    res.send("great")
})
router.post('/products', (req, res) => {
    res.send("great")
})

module.exports = router