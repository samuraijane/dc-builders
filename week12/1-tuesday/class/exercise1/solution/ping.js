const express = require('express')
const app = express()

const port = 3000

app.get('/ping', function (req, res) {
    res.send('PONG')
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})