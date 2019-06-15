const express = require('express');
const passport = require('passport');

const AuthRouter = express.Router();

AuthRouter.post('/register', passport.authenticate('register', { failWithError: true }), (req, res) => {
    res.send(req.user);
});

AuthRouter.post('/login', passport.authenticate('login', { failWithError: true }), (req, res) => {
    res.send(req.user);
});

module.exports = {
    AuthRouter,
};
