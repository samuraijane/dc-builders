const express = require('express')
const bodyParser = require('body-parser')
const session =  require('express-session')
const cookieParser = require('cookie-parser')


const app = express()

app.use(bodyParser.json())

app.use(cookieParser('Super Secret'))


app.use(session({
    secret:'Super Secret',
    cookie: {maxAge: 60000}
}))

app.get('/', (req, res) => {
    console.log(req.session)
    console.log("Hello world")
    res.send(`<h1>Hello world from server</h1>
    <h2>Session</h2>
    <pre>${JSON.stringify(req.session, null, '\t')}</pre>
    <h2>Cookies</h2>
    <pre>${JSON.stringify(req.cookies, null, '\t')}</pre>
    <h2>Signed Cookies</h2>
    <pre>${JSON.stringify(req.signedCookies, null, '\t')}</pre>`)
})

app.get('/setmyusername', (req, res) => {
    req.session.username = "Harry Styles"
    res.send(`<h1>Your username is now Harry</h1>`)
})

app.get('/setcookies', (req,res) => {
    res.cookie('password', 'cupcakes')
    res.send('I sent your cookies')
})


app.listen(3000, () => {
    console.log("server started")
})