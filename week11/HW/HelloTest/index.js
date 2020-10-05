const http = require('http');

// IP address
const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/cats', (req, res) => {
    res.send('Meow!');
});

app.get('/dogs', (req, res) => {
    res.send('Woof!');
});

app.get('/cats_and_dogs', (req, res) => {
    res.send('Dogs and cats living together...mass hysteria!!');
});

app.get('/greet', (req, res) => {
    res.send('This is the greeting');
});

app.get('/greet/:handle', (req, res) => {
    // destructure req.params.handle
    const {handle} = req.params;
    let htmlData = ``;
        htmlData += `<h1>Hello, ${handle}!</h1>`;
    res.send(htmlData);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});