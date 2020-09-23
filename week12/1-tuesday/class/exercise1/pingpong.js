const express = require('express')
const app = express()
 
app.get('/ping', function (req, res) {
  res.send('PONG')
})
 
app.listen(3000)
