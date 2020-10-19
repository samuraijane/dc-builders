require('dotenv').config();

const express = require('express');
const app = express(); //set up app
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const { Sequelize, DataTypes, Model } = require('sequelize');
const { Router } = require('express');

// SETTING UP SEQUELIZE
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  });

//MAKE A MODEL FOR DATABASE
class User extends Model {}

User.init({
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING, //this can change. a github user can change this
    allowNull: false
  },
  githubId: {
      type: DataTypes.INTEGER, //this never changes
      allowNull: false
  },
  profileUrl: {
    type: DataTypes.STRING, //this can change
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  freezeTableName: true
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true

sequelize.sync(); //doesn't run migrations or update table. just creates one

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
    let user = await User.findOne({where: { githubId: parseInt(profile.id) }})

    if(!user) {
      // User doesn't exist - make a new database entry
      user = User.build({ //need user.save() because User.build() does not automatically create entry in table -- build() doesn't actually even talk to the database. it isn't async like most of the other methods. the build method only creates an object that represents data that can be mapped to a database.
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

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    //What goes INTO the session here; right now it's everything in User
    done(null, user);
});

passport.deserializeUser(function(id, done) {
    done(null, id);
    //This is looking up the User in the database using the information from the session "id"
});

//where can I call req.user

//GITHUB CALLBACK URL
app.get('/auth/github/callback', passport.authenticate('github', {failureRedirect: '/'}), (req, res) => {
    res.redirect('/loggedIn.html');
})

//ROUTE CALLED WHEN WANT TO LOGIN
app.get('/auth/github', passport.authenticate('github'));

//ROUTE CALLED WHEN WANT TO LOGOUT
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
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