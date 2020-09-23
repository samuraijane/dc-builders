
const port = process.argv[2] || 3000; //specify a default if don't state


const express = require('express')
const app = express()

//order matters when doing your requests...routing and handlers which are the anoymous functions inside the requests. Most specific go first. 

app.get('/todo', function (req, res) {
    res.send('My Todo List')
  })

app.post('/todo', function (req, res) {
    console.log("I'm a server, and I got a new request for a list.");
    res.send('Request received.');
})

app.get('/', function (req, res) {  //one slash is just the root or homepage
  res.send('Hello Digital Crafts')
})

app.get('*', function (req, res) {    //star means happen for anything as long as not specified above ----> be careful with this
    res.send('Hello World')
  })

 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})