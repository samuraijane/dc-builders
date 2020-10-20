require('dotenv').config()
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const session = require('express-session')
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy

//1. Setting up Sequelize
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
        { 
            host: process.env.DB_HOST,
            dialect: 'postgres'    
        }
);

//Check the database connection
// sequelize.authenticate().then( () => {
//     console.log('database connected')
// }).catch( (error) => {
//     console.log(error)
// });


//2. Make a model
class User extends Model {}

User.init({
    //Model attributes are defined here
  ghId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    //Other model options go here
    sequelize,//we need to pass the connection string
    modelName: 'User' // we need to choose a model name
});

//3. Setting up Passport and the passport strategy
passport.use(new GitHubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: process.env.GH_CALLBACK
  },

//4. Setting up access tokens
  // This is the function that returns a user profile after someone
  // logs into github. You should save the profile to your database HERE
async function(accessToken, refreshToken, profile, cb) {
    console.log("Git Hub Profile\n" + JSON.stringify(profile))

    // ASIDE: Access Tokens are super important! Treat them like passwords (never store in plain text)
    // You can use this to talk to the Github API
    console.log("\nAccess Token: " + accessToken)

      // YOUR DB CODE HERE
    // 3. Use the model here - store the use info
    //looks through user table to find one where profile.id = ghId
    let user = await User.findOne( {where: {ghId: parseInt(profile.id)}})

//    if(user) {  //if user exists, continue sending data on to passport
//        cb(null, user)
//    } else {  //if user doesn't exist, return this        
//        user = await User.build({ //add new user to database using .build
//            ghId: parseInt(profile.id), //ghId = profile.id
//            username: profile.username
//        })
//    }     
//      cb(null, profile) // Tells passport to move on
//  }
//));

sequelize.sync()


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
    // Tells passport to move on
    cb(null, user)
  }
));



// Set up sessions with cookies
app.use(session({
    secret: 'super secret',
    cookie: {maxAge: 60000}
}))




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
    req.logout() //login/logout are passport method
    res.redirect("/")
})

// Homepage
app.get('/', (req, res) => {
    res.send(`<h1>Hello world from server</h1>
    <a href="./auth/github">Log In</a>
    <h2>Session</h2>
    <pre>${JSON.stringify(req.session, null, '\t')}</pre>
    <h2>Req.user</h2>
    <pre>${JSON.stringify(req.user, null, '\t')}</pre>`)
})

// NEW! Didn't cover this in class 
// How can we make sure that someone is logged in to see a page?
// We make our own middleware we can add to our routes.

// express function can be added as second argument
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { // passport method is accessible in all routes in project
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