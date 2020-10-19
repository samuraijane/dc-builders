require('dotenv').config();

const express = require('express');
const app = express(); //set up app
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const { Sequelize } = require('sequelize');
const User = require('./models/user');
const authRouter = require('./router/auth');

// SETTING UP SEQUELIZE
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  });

// CALLING THE MODEL & CREATING THE TABLE
let db = {}; //create an empty object to put instance of User in it
db.User = User(sequelize); //model returns a function so calling it here to get object with user
sequelize.sync(); //create table


// SETTING UP PASSPORT AND THE PASSPORT STRATEGY
passport.use(new GitHubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: process.env.GH_CALLBACK
    },

  // This is the function that returns a user profile after someone
  // logs into github. You should save the profile to your database HERE
  async function(accessToken, refreshToken, profile, cb) {
    console.log("****PROFILE\n" + JSON.stringify(profile))

    // ASIDE: Access Tokens are super important! Treat them like passwords (never store in plain text)
    // You can use this to talk to the Github API
    // will want to save this access token to database as you would a password
    // lets you get stuff from the linked account
    console.log("\nAccess Token: " + accessToken)
    
    // YOUR DB CODE HERE
    // 3. Use the model here - store the use info
    let user = await db.User.findOne({where: { githubId: parseInt(profile.id) }})

    if(!user) {
      // User doesn't exist - make a new database entry
      user = db.User.build({ //need user.save() because User.build() does not automatically create entry in table -- build() doesn't actually even talk to the database. it isn't async like most of the other methods. the build method only creates an object that represents data that can be mapped to a database.
        username: profile.username,
        githubId: parseInt(profile.id),
        profileUrl: profile.profileUrl
      })

      await user.save();
    }
    // Tells passport to move on
    cb(null, user) //only passing back user data that is in the database, can now call req.user.username, etc. 
  }
));

// ATTACHING MIDDLEWARE
app.use(bodyParser.json()); //attach middleware and only use json
app.use(express.static(__dirname + "/public")); 

//SET UP SESSION
app.use(session({
    secret: 'super secret',  //signing the back of the envelope, make as complicated as possible
    cookie: {maxAge: 3600000}  //this sets an expiration date of the cookie in ms
    }
))

// ATTACHING PASSPORT
app.use(passport.initialize());
app.use(passport.session());

//ATTACHING 3 AUTH ROUTES
app.use(authRouter);

passport.serializeUser(function(user, done) {
    //What goes INTO the session here; right now it's everything in User
    done(null, user);
});

passport.deserializeUser(function(id, done) {
    done(null, id);
    //This is looking up the User in the database using the information from the session "id"
});

// NEW! Didn't cover this in class 
// How can we make sure that someone is logged in to see a page?
// We make our own middleware we can add to our routes.
// PROTECTED Router, CAN BE 2nd argument in any endpoint
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next(); //next is just the normal next thing. in this case its passing it into an enpoint as the second argument and running normal route logic
    }
    res.redirect('/')
}

// This is a secret page that only logged in users can see!
app.get('/fansonly', ensureAuthenticated,(req, res) => {
    console.log(req.session)
    res.send(`<h1> You're Special! </h1> <img src="https://media.giphy.com/media/TfumiIU3zb7K1zJoQD/giphy.gif" />`)
})

app.listen(process.env.PORT, () => {
    console.log(`Server started at Port ${process.env.PORT}`)
});