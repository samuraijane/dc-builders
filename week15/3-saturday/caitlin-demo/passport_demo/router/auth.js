const express = require('express');
const router = express.Router();
const passport = require('passport');

module.exports = router;

//GITHUB CALLBACK URL
router.get('/auth/github/callback', passport.authenticate('github', {failureRedirect: '/'}), (req, res) => {
    res.redirect('/loggedIn.html');
})

//ROUTE CALLED WHEN WANT TO LOGIN
router.get('/auth/github', passport.authenticate('github'));

//ROUTE CALLED WHEN WANT TO LOGOUT
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});