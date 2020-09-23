const express = require('express');
const app = express();
const port = process.argv[2] || 3000;

app.get('/ping', function(req, res){
    res.send('pong');
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})