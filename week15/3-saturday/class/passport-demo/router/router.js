const express = require('express');
const router = express.Router();
const passport = require('passport')
router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/'}) ,(req, res) => {
    res.redirect('/')
})

// This is the route I call when I want to login
router.get('/login', passport.authenticate('github'), function (req, res){
    if(req.user){
        res.send(true)
    } else {
        res.send(false)
    }
})

router.get('/logout', (req, res)=> {
    req.logout()
    res.redirect('/')
})

router.get('/', (req, res) => {
    res.send(`<h1>Hello world from server</h1>
    <h2>Session</h2>
    <pre>${JSON.stringify(req.session, null, '\t')}</pre>`)
})


module.exports = router;