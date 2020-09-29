const express = require('express');
const app = express();

const port = process.argv[2] || 3000

let count = 0;

app.use(express.static(__dirname + '/public'))

app.get('/todos', function (req, res) {
    res.send('TODO List')
})

app.post('/todos', function (req, res) {
    console.log("I'm a server, and I got a new request for a list.")
    count += 1
    // res.send(`${count} requests received`)
    res.send(200)
})

app.get('*', function (req, res) {
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})