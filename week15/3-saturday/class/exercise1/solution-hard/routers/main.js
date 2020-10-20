const express = require('express')
const passport = require('../config/passport')

const router = express.Router()

// NEW! Didn't cover this in class 
// How can we make sure that someone is logged in to see a page?
// We make our own middleware we can add to our routes.

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}

// Homepage
router.get('/', ensureAuthenticated, (req, res) => {
  res.send(`<h1>Hello world from server</h1>
  <a href="./auth/logout">Logout</a>
  <h2>Req.session</h2>
  <pre>${JSON.stringify(req.session, null, '\t')}</pre>
  <h2>Req.user</h2>
  <pre>${JSON.stringify(req.user, null, '\t')}</pre>`)
})


// This is a secret page that only logged in users can see!
router.get('/fansonly', ensureAuthenticated,(req, res) => {
    res.send(`<h1> You're Special! </h1> <img src="https://media.giphy.com/media/TfumiIU3zb7K1zJoQD/giphy.gif" />`)
})

// END NEW STUFF

module.exports = router