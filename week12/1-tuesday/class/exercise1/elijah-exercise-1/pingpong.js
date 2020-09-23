const express = require('express')
const app = express()
 
app.get('/ping', function (req, res) {
  res.send('Pong')
})

app.get('/', function (req, res) {
    res.send("This isn't the only page.")
})

app.listen(3000)