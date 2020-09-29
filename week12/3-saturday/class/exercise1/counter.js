const express = require('express')
const app = express()

const port = 3000

let count = 0;

app.use(express.static(__dirname + '/public'))

app.post('/api/increment', function (req, res) {
    count += 1
    res.send(count.toString())
})

app.post('/api/decrement', function (req, res) {
    count -= 1
    res.send(count.toString())
})

app.post('/api/reset', (req, res) => {
    count = 0
    res.send(count.toString())
})

app.get('/api/value', function (req, res) {
    res.send(count.toString())
})

app.get('/api', function (req, res) {
    res.send("I'm here");
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})