require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy
const { Sequelize } = require ('sequelize');

//Setting up my Sequelize here
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{
    host: 'localhost',
    dialect: 'postgres'
  });
//Checkig connetion 
//   sequelize.authenticate().then( ()=>{
//     console.log('Connection has been established successfully.')
//   }).catch( (err)=>{
//       console.log(err)
//   })
  

// Set up the in express
const app = express()

app.use(bodyParser.json())

// Set up sessions with cookies
app.use(session({
    secret: 'super secret',
    cookie: {maxAge: 60000}
}))

//Setting up Passport and the passport strategy
passport.use(new GitHubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: process.env.GH_CALLBACK
  },

  //THis is the function that reurns a user profile after someone
  //;logs into github. You should save the profile to your database HERE
  function(accessToken, refreshToken, profile, cb) {
      console.log(JSON.stringify(profile))

    //YOUR CODE HERE

    //Tells passport to move on
    cb(null, profile)
  }
));

app.use(passport.initialize())
app.use (passport.session())

passport.serializeUser(function(user, done) {
    //What goes INTO the session here; right now it's everything in User
    done(null, user);
});

passport.deserializeUser(function(id, done) {
    done(null, id);
    //This is looking up the User in the database using the information from the session "id"
});

//Callback
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/'}) ,(req, res) => {
    res.redirect('/')
})

//This is the route I call when I want to login
app.get('/auth/github', passport.authenticate('github'))

// This is the route I call when I want to log out
app.get('/logout', (req, res) => {
    req.logout()
    res.redirect("/")
})


app.get('/', (req, res) => {
    res.send(`<h1>Hello world from server</h1>
    <h2>Let's Login</h2>
    <button>Login</button>
    <pre>${JSON.stringify(req.session, null, '\t')}</pre>`)
})



app.listen(process.env.PORT, ()=> {
    console.log("Server Running on port: " + process.env.PORT)
})
