require('dotenv').config()
const express = require('express')

const loginRouter = require('./router/router')
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy
// Set up the in express
var app = express();
app.use(express.static(__dirname + "/public"))
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());







app.use('', loginRouter)
// Set up sessions with cookies


passport.serializeUser(function(user, done) {
    //What goes INTO the session here; right now it's everything in User
    done(null, user);
});

passport.deserializeUser(function(id, done) {
    done(null, id);
    //This is looking up the User in the database using the information from the session "id"
});

passport.use(new GitHubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: process.env.GH_CALLBACK
  },

  // This is the function that returns a user profile after someone
  // logs into github. You should save the profile to your database HERE
  function(accessToken, refreshToken, profile, cb) {
      console.log(JSON.stringify(profile))

      // YOUR DB CODE HERE

      // Tells passport to move on
      cb(null, profile)
  }
));













app.listen(process.env.PORT, ()=> {
    console.log("Server Running on port: " + process.env.PORT)
})