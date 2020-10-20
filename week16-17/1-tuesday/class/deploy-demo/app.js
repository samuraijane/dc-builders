require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport= require('./config/passport');
const authRouter = require('./routers/auth')
const mainRouter = require('./routers/main')

// Set up the in express
const app = express()

app.use(bodyParser.json())

// Set up sessions with cookies
app.use(session({
    secret: 'super secret',
    cookie: {maxAge: 60000}
}))


// Attach Passport to Express and Sessions
app.use(passport.initialize())
app.use(passport.session())

// Attach routes
app.use('/auth', authRouter)
app.use('/', mainRouter)

app.use(express.static( __dirname + '/public'))


app.listen(process.env.PORT, ()=> {
    console.log("Server Running on port: " + process.env.PORT)
})