console.log("Hello World!");

// IP address
// const hostname = '127.0.0.1';
const port = process.argv[2] || 3000;

const express = require('express');
const app = express();

let count = 0;

app.get('/ping', (req, res) => {
    console.log('pong')
    res.send('pong');
});

app.get('/value', (req, res) => {
    console.log(`COUNT VALUE is at: ${count}`);
    res.send(`COUNT VALUE is at: ${count}`);
});


app.post('/increment', (req, res) => {
    count++;
    console.log(`COUNT UP: ${count}`);
    res.send(`COUNT UP now at: ${count} `);
});

app.post('/decrement', (req, res) => {
    count--;
    console.log(`COUNT DOWN: ${count}`);
    res.send(`COUNT DOWN now at: ${count} `);
});


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('*', (req, res) => {
    res.send('WILD CARD!');
});

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})