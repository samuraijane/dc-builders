const express = require('express')
const app = express()
let theCount = 0

app.post('/increment', function (req, res) {
    theCount++;
    res.send(`The current count is ${theCount}, ha ha ha.`)
})

app.post('/decrement', function (req, res) {
    theCount--;
    res.send(`The current count is ${theCount}, ha ha ha.`)
})

app.get('/value', function (req, res) {
  res.send(`The current count is ${theCount}, ha ha ha.`)
})

app.listen(3000)