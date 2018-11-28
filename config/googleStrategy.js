const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/userTable");

var strategy = new GoogleStrategy(
  {
    clientID: "c72c3660a05968eb82df",
    clientSecret: "f2e26ad5ac17ef172cf1dcc7758333fc8bfabab1",
    callbackURL: "http://localhost:3001/auth/github/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    console.log("passport callback function fired");
    // console.log(profile);
    var fullName = profile.displayName.split(" ");
    User.findOne({ github_id: profile.id }).then(currentUser => {
      if (currentUser) {
        console.log("found user: ", currentUser);
        done(null, currentUser);
      } else {
        console.log("creating new github user");
        githubUser = new User({
          github_id: profile.id,
          user_name: profile.username,
          user_firstName: fullName[0],
          user_lastName: fullName[1],
          user_pass: profile._json.node_id
        })
          .save()
          .then((err, newUser) => {
            if (err) {
              console.log(err); // handle errors!
            } else {
              console.log("successfully saved new github user ", newUser);
              done(null, newUser);
            }
          });
      }
    });
  }
);

module.exports = strategy;
