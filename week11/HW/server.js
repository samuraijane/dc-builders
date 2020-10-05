console.log("Hello World");

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;


const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/favicon.ico', (req, res) => {
  res.send('');
});

app.get('/test.com', (req, res) => {
  res.send('Hello Test');
});

app.get('*', (req, res) => {
  res.send('This is not the home page')
});

app.post('/', (req, res) => {
  // ...handle the data submitted in the form
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// const server = http.createServer((req, res) => {
//   // Extract the url path from the request.
//   // const url = req.url;
//   const {url} = req;
//   console.log(`The URL path is: ${url}`);

//   if (url === '/') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World')
// } else if (url === '/favicon.ico') {
//     res.statusCode = 200;
//     res.end('')
// } else {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('This is not the home page')
// };
// });