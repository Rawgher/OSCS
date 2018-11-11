const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const User = require("../models/userTable");

// Called on login, saves the id to session req.session.passport.user
passport.serializeUser((user, done) => {
    console.log('*** serializeUser called, user: ', user);
    console.log('------------');
    done(null, { _id: user._id });
});

// User object attaches to the request as req.user
passport.deserializeUser((id, done) => {
    console.log('Deserialize called')
    User.findOne(
        {_id: id },
        'username',
        (err, user) => {
            console.log('*** Deserialize user, user:', user);
            console.log('-------------');
            done(null, user);
        }
    )
});

passport.use(LocalStrategy);

module.exports = passport;

