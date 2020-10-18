require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy


// Set up the in express
const app = express()

app.use(bodyParser.json())

// Set up sessions with cookies
app.use(session({
    secret: 'super secret',
    cookie: {maxAge: 60000}
}))

// Setting up Passport and the passport strategy
passport.use(new GitHubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: process.env.GH_CALLBACK
  },

  // This is the function that returns a user profile after someone
  // logs into github. You should save the profile to your database HERE
  function(accessToken, refreshToken, profile, cb) {
    console.log(JSON.stringify(profile))

    // ASIDE: Access Tokens are super important! Treat them like passwords (never store in plain text)
    // You can use this to talk to the Github API
    console.log("Access Token: " + accessToken)

      // YOUR DB CODE HERE
    // 3. Use the model here - store the use info

      // Tells passport to move on
      cb(null, profile)
  }
));

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user, done) {
    //What goes INTO the session here; right now it's everything in User
    done(null, user);
});

passport.deserializeUser(function(id, done) {
    done(null, id);
    //This is looking up the User in the database using the information from the session "id"
});

// Callback
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/'}) ,(req, res) => {
    res.redirect('/')
})

// This is the route I call when I want to login
app.get('/auth/github', passport.authenticate('github')) 

// This is the route I call when I want to log out
app.get('/logout', (req, res) => {
    req.logout()
    res.redirect("/")
})

// Homepage
app.get('/', (req, res) => {
    res.send(`<h1>Hello world from server</h1>
    <h2>Session</h2>
    <pre>${JSON.stringify(req.session, null, '\t')}</pre>`)
})

// NEW! Didn't cover this in class 
// How can we make sure that someone is logged in to see a page?
// We make our own middleware we can add to our routes.

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/')
}

// This is a secret page that only logged in users can see!
app.get('/fansonly', ensureAuthenticated,(req, res) => {
    console.log(req.session)
    res.send(`<h1> You're Special! </h1> <img src="https://media.giphy.com/media/TfumiIU3zb7K1zJoQD/giphy.gif" />`)
})

// END NEW STUFF

app.listen(process.env.PORT, ()=> {
    console.log("Server Running on port: " + process.env.PORT)
})