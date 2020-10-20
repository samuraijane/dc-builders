const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// ATTACHING MIDDLEWARE
app.use(bodyParser.json()); //attach middleware and only use json
app.use(cookieParser('super secret')); //this lets us read cookies
app.use(session({
    secret: 'super secret',  //signing the back of the envelope, make as complicated as possible
    cookie: {maxAge: 3600000}  //this sets an expiration date of the cookie in ms
}))

app.get('/', (req, res) => {
    console.log(req.session)
    console.log("Hello World");
    res.send(`
    <h1>Hello World from Server</h1>
    <h2>Session</h2>
    <pre>${JSON.stringify(req.session, null, '\t')}</pre>
    <h2>Unsigned Cookies</h2>
    <pre>${JSON.stringify(req.cookies, null, '\t')}</pre>
    <h2>Signed Cookies</h2>
    <pre>${JSON.stringify(req.signedCookies, null, '\t')}</pre>`); //sends HTML back
})

app.get('/setmyusername', (req, res) => {
    req.session.username = "Harry Styles"
    res.send(`<h1>Your username is set to ${req.session.username}</h1>`); //sends HTML back
})

app.get('/setcookie', (req, res) => {  //express has a method built in to set a cookie
    res.cookie('password', 'cupcakes');
    res.send(`<h1>I set your cookie</h1>`); //sends HTML back
})

app.listen (3000, () => {
    console.log("Server started at Port 3000")
})