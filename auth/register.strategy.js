const LocalStrategy = require('passport-local').Strategy;

const User = require('../db/models/User');

const registerStrategy = new LocalStrategy((username, password, done) => {
    User.find()
        .where('username', username)
        .then(users => {
            if (users.length) {
                done({ message: 'Username already in use' });
                throw '';
            }

            const hashedPassword = password.toUpperCase();

            const newUser = new User({
                username,
                password: hashedPassword,
            });

            return newUser.save();
        })
        .then(user => {
            delete user.password;
            done(null, user);
        })
        .catch(err => {
            if (!err) {
                return;
            }

            console.error(err);
            done({ message: 'System failure' });
        });
});

module.exports = {
    registerStrategy,
};
