const express = require('express');
const router = express.Router();
const users = require('../models/users');
var bodyParser = require('body-parser');


//body parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

function checkLogin(req, res, next) {
    console.log(req.session.user);
    if (req.session.user) {
        //is user in the users model?
        if (users.users.find(user => user.username === req.session.user)) {
            //yes, continue
            next();
        } else {
            //no, redirect to login page
            res.render('login', {message: 'You are not authorized to view this page'});
        }
    } else {
        //no, redirect to login page
        res.redirect('/login');
    }
}

// Admin Pages
router.get('/admin', checkLogin, (req, res) => {
    res.render('admin');
});

router.get('/login', (req, res) => {
    res.render('login', {message: req.query.message, redirect: req.query.redirect, username: req.query.username});
});

router.post('/login', urlencodedParser, (req, res) => {

    // Check if the username and password are correct
    if (req.body.username === 'admin' && req.body.password === 'supersecret') {
        // If they are, set the session user to the username
        req.session.user = req.body.username;
        // Redirect to the admin page
        res.redirect('/admin');
    } else {
        // If they aren't, redirect to the login page with a message
        res.render('login', {message: 'Incorrect username or password', redirect: req.body.redirect, username: req.body.username});
    }
});

router.get('/logout', (req, res) => {
    // Destroy the session
    req.session.destroy();
    // Redirect to the login page
    res.redirect('/');
});

module.exports = router;