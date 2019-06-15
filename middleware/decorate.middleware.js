const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

/**
 * @param {Express.Application} app 
 */
function decorate(app) {
    app.use(cors());
    app.use(express.json());
    app.use(session({
        saveUninitialized: false,
        resave: false,
        secret: process.env.SESSION_SECRET,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
}

module.exports = {
    decorate,
};
