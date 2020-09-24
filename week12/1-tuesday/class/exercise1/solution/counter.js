const express = require('express')
const app = express()

const port = 3000

let count = 0;

app.post('/increment', function (req, res) {
    count += 1
    res.send(count.toString())
})

app.post('/decrement', function (req, res) {
    count -= 1
    res.send(count.toString())
})

app.get('/value', function (req, res) {
    res.send(count.toString())
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})