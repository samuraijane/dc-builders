const express = require('express');
const app = express();
const port = process.argv[2] || 3000;

var count = 0;

app.post('/increment', function(req, res){
    count++
    res.send("count has been incremented")
})

app.post('/decrement', function(req, res){
    count--
    res.send("count has been decremented")
})

app.get('/value', function(req, res){
    res.send(`${count}`);

})













app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})