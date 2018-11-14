var GitHubStrategy = require('passport-github').Strategy;
const User = require('../models/userTable');

var strategy = new GitHubStrategy(
  {
    clientID: "c72c3660a05968eb82df",
    clientSecret: "f7b479d6d86cac41554725d42ee306c6ab162516",
    callbackURL: "http://127.0.0.1:3000/auth/github/callback" || "https://onestopcodeshop.herokuapp.com/search/"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log("GibHub user profile: ", profile);
    User.findOne({ _id: profile.id }, function(err, user) {
        if(err) {
          console.log(err);  // handle errors!
        }
        if (!err && user !== null) {
          done(null, user);
        } else {
          user = new User({
            _id: profile.id,
            user_name: profile.displayName,

          });
          user.save(function(err) {
            if(err) {
              console.log(err);  // handle errors!
            } else {
              console.log("saving user ...");
              done(null, user);
            }
          });
        }
      });
  }
);

module.exports = strategy;