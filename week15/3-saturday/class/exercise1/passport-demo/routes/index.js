var express = require('express');
var router = express.Router();

const passport = require('passport');

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      // req.user is available for use here
      return next();
    }

      // denied. redirect to login
  res.redirect('/');
}

router.get('/protected', ensureAuthenticated, function(req, res) {
  res.send("access granted. secure stuff happens here");
});


/* GET home page. */
router.get('/', function(req, res, next) {
  let user = '';
  if (req.isAuthenticated()) {
    user = JSON.stringify(req.user, null, 4);
  }
  res.render('index', { title: 'Express', user:  user});
});

router.get('/auth/github', passport.authenticate('github'));

// GitHub will call this URL
router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  }
);

router.get('/logout', function(req, res, next) {
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

module.exports = router;
