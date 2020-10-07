let count = 0;

const express = require('express')

const app = express()
 
app.post('/count', function (req, res) {
  console.log("I'm a server, and I got a new request for a list.")
  count += 1
  res.send(`${count} requests received`)
})

app.post('/count', function (req, res) {
  console.log("I'm a server, and I got a new request for a list.")
  count -= 1
  res.send(`${count} requests received`)
})
 
app.get('/count', function (req, res) {
  res.send(`${count}`)
})

app.listen(3000)