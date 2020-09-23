const express = require('express')
const app = express()

let count = 0;

app.post('/increment', function (req, res) {
    count = count + 1;
    console.log("I'm a server, and I got a new request.");
    res.send(`${count}`)
  })

app.post('/decrement', function (req, res) {
    count = count - 1;
    console.log("I'm a server, and I got a new request.");
    res.send(`${count}`)
  })

app.get('/value', function (req, res) {
  res.send(`Counter is at: ${count}`)
})
 
app.listen(3000);
