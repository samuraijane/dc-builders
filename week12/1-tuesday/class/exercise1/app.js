const express = require('express');
const app = express();

const port = 3000
 
app.get('/ping', function (req, res) {
  res.send('PONG')
})
 
app.listen(3000, function(){
  console.log('PONG')
})