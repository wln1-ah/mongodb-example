const express = require('express');

const ApiRouter = express.Router();

const User = require('../db/models/User');

ApiRouter.get('/users', (req, res) => {
    User.find()
        .then(users => {
            users.forEach(user => {
                delete user.password;
            });
            res.send(users);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: 'System failure' });
        });
});

module.exports = {
    ApiRouter,
};
