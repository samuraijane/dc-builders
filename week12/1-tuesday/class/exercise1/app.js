const express = require('express')
const app = express()

const port = process.argv[2] || 3000
let count = 0;

app.get('/ping', (req, res) => {
    res.send("PONG")
})

app.post('/increment', (req, res) => {
    count += 1
    res.send(`Count: ${count}`)
})

app.post('/decrement', (req, res) => {
    count -= 1
    res.send(`Count: ${count}`)
})

app.get('/value', (req, res) => {
    res.send(`Value: ${count}`)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})