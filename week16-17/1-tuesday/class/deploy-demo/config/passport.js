const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy
const User = require('../models/user')

// Setting up Passport and the passport strategy
passport.use(new GitHubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: process.env.GH_CALLBACK
  },

  // This is the function that returns a user profile after someone
  // logs into github. You should save the profile to your database HERE
  async function(accessToken, refreshToken, profile, cb) {
    // console.log("****PROFILE\n" + JSON.stringify(profile))

    // ASIDE: Access Tokens are super important! Treat them like passwords (never store in plain text)
    // You can use this to talk to the Github API
    // console.log("\nAccess Token: " + accessToken)
    
    // YOUR DB CODE HERE
    // 3. Use the model here - store the use info

    // Check if the user already exists, i.e. they logged in before.
    let user = await User.findOne({where: { ghId: parseInt(profile.id) }})

    if(!user) {
      // User doesn't exist - make a new database entry
      user = await User.build({
        ghId: parseInt(profile.id),
        username: profile.username,
        createAt: new Date(),
        updatedAt: new Date()
      })
      await user.save();
    }
    // Tells passport to move on and attach "user" object to the session
    cb(null, user)
  }
));

// ADVANCED MODE: if you want to minimize the information stored in the session, 
// You need to implement these two methods.
passport.serializeUser(function(user, done) {
    // What goes INTO the session here; right now it's everything in User
    // this should really only be the User ID
    done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
    //This is looking up the User in the database using the information from the session "id"
    // Convert the ID into the User object.
    const user = await User.findByPk(id)

    done(null, user);
    
});

module.exports = passport