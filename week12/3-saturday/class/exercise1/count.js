const express = require('express');
const app = express();
const port = process.argv[2] || 3000;

app.use(express.static(__dirname + "/public"))

var count = 0;

app.post('/increment', function(req, res){
    count++
    res.send(count.toString())
})

app.post('/decrement', function(req, res){
    count--
    res.send(count.toString())
})

app.get('/count', function(req, res){
    res.send(`${count}`);

})

app.post('/reset', function(req, res){
    count = 0;
    res.send(`${count}`)
})












app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})