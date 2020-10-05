const http = require('http');
const hostname = '127.0.0.1';

// Sets a default port
const port = process.argv[2] || 3000;


const express = require('express');
const app = express();


// Put more specific higher up
// routing: method('/path', requesting)=>
app.get('/todo', (req, res) => {
    res.send('TO DO LIST');
});

app.post('/todo', (req, res) => {
    console.log('Server lst request')
    res.send('Request received');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('*', (req, res) => {
    res.send('WILD CARD!');
});

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
});
// const express = require('express')
// const app = express()

// const port = process.argv[2] || 3000

// let count = 0;

// app.get('/todos', function (req, res) {
//     res.send('TODO List')
// })

// app.post('/todos', function (req, res) {
//     console.log("I'm a server, and I got a new request for a list.")
//     count += 1
//     // res.send(`${count} requests received`)
//     res.send(200)
// })

// app.get('*', function (req, res) {
//     res.send('Hello World')
// })

// app.listen(port, ()=>{
//     console.log(`Server is running on port ${port}`)
// })