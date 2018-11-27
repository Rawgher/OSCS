var GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/userTable');

var strategy = new GitHubStrategy(
  {
    clientID: "c72c3660a05968eb82df",
    clientSecret: "f2e26ad5ac17ef172cf1dcc7758333fc8bfabab1",
    callbackURL: "http://localhost:3000/search"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log("GibHub user profile: ", profile);
    // User.findOne({ _id: profile.id }, function(err, user) {
    //     if(err) {
    //       console.log(err);  // handle errors!
    //     }
    //     if (!err && user !== null) {
    //       done(null, user);
    //     } else {
    //       console.log(user);
          // user = new User({
          //   _id: profile.id,
          //   user_name: profile.displayName,

          // });
          // user.save(function(err) {
          //   if(err) {
          //     console.log(err);  // handle errors!
          //   } else {
          //     console.log("saving user ...");
          //     done(null, user);
          //   }
          // });
        // }
      // });
  }
);

module.exports = strategy;