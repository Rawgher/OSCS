const User = require('../models/userTable');
const LocalStrategy = require('passport-local').Strategy;

console.log("is the strategy happening");

const strategy = new LocalStrategy(
    {
        usernameField: "user_name",
        passwordField: "user_pass"
    },
    function(username, password, done) {
        console.log("strategy searches database");
        User.findOne({ user_name: username }, (err, user) => {
            if (err) {
                console.log("there was an error");
                return done(err);
            }
            if (!user) {
                console.log("User not found");
                return done(null, false, { message: "Inccorect username" });
            }
            if (user.user_pass !== password) {
                console.log("Password incorrect: ", password);
                return done(null, false, { message: "Incorrect password" });
            }
            console.log("done");
            return done(null, user);
        })
    }
)

module.exports = strategy;