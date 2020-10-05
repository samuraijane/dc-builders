console.log("Hello World!");

const port = process.argv[2] || 3000;

const express = require('express');
const app = express();

let count = 0;

app.use(express.static(__dirname + "/public"))

app.get('/api/value', (req, res) => {
    console.log(`COUNT VALUE is at: ${count}`);
    res.send({count: count});
});


app.post('/api/increment', (req, res) => {
    count++;
    console.log(`COUNT UP: ${count}`);
    res.send({count: count});
});

app.post('/api/decrement', (req, res) => {
    count--;
    console.log(`COUNT DOWN: ${count}`);
    res.send({count: count});
});

app.post('/api/reset', (req, res) => {
    count = 0;
    console.log(`COUNT RESET TO ${count}`);
    res.send({count: count});
});

// GETS IGNORED BC OF EXPRESS.STATIC PLACEMENT
// DYNAMIC CONENT
app.get('/api', (req, res) => {
    res.send('Hello World');
});

app.get('*', (req, res) => {
    res.send('WILD CARD!');
});

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})