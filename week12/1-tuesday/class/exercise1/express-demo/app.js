const express = require('express');
const app = express();
const port = process.argv[2] || 3000;
    
app.get('/', function(req, res){
    res.send('Hello World');
})

app.get('/todos', function (req, res){
    res.send('TODO List');
})

app.post('/todos', function(req, res){
    console.log("I'm a server, and I got a new request for a list.")
    res.send('request received')
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})