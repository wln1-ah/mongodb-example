const passport = require('passport');

const User = require('../db/models/User');
const { registerStrategy } = require('./register.strategy');

passport.use('register', registerStrategy);

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((userId, done) => {
    if (!userId) {
        return done(null, false);
    }
    
    User.findById(userId)
        .then(user => {
            delete user.password;

            done(null, user);
        })
        .catch(err => {
            console.error(err);
            done({ message: 'System failure' });
        });
});
