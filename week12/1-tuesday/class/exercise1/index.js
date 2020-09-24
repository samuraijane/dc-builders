const express = require('express');
const app = express();

// app.get('/ping', function (req, res) {
//     res.send('PONG');
// })

// app.listen(8000, () => {
//     console.log('Example app listening on port 8000!')
//   });

let counter = 0;

app.post('/increment', function (req, res) {
    counter++;
    res.send(`The value is ${counter}.`)
})

app.post('/decrement', function (req, res) {
    counter--;
    res.send(`The value is ${counter}.`)
})

app.get('/value', function (req, res) {
    res.send(`The value is ${counter}.`)
})

app.listen(8000, () => {
    console.log(counter);
})