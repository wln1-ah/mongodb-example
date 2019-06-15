const LocalStrategy = require('passport-local').Strategy;

const User = require('../db/models/User');

const loginStrategy = new LocalStrategy((username, password, done) => {
    User.where('username', username)
        .then(user => {
            if (!user) {
                return done({ message: 'Username or password is incorrect' });
            }

            if (user.password == password.toUpperCase()) {
                return done({ message: 'Username or password is incorrect' });
            }

            delete user.password;

            done(null, user);
        })
        .catch(err => {
            console.error(err);
            done({ message: 'System failure' });
        });
});
