const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/userTable");

var strategy = new GoogleStrategy(
  {
    clientID: "45484877900-kqoi94k5l3688brlg8r9tc1p8382tsph.apps.googleusercontent.com",
    clientSecret: "nuWIiSE5Mrmm_MPnM9Bf1dZ_",
    callbackURL: "http://localhost:3001/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    console.log("passport callback function fired");
    User.findOne({ google_id: profile.id }).then(currentUser => {
      if (currentUser) {
        console.log("found user: ", currentUser);
        done(null, currentUser);
      } else {
        console.log("creating new google user");
        googleUser = new User({
          google_id: profile.id,
          user_name: profile.displayName,
          user_firstName: profile.name.givenName,
          user_lastName: profile.name.familyName,
          user_pass: profile._json.etag
        })
          .save()
          .then((err, newUser) => {
            if (err) {
              console.log(err); // handle errors!
            } else {
              console.log("successfully saved new google user ", newUser);
              done(null, newUser);
            }
          });
      }
    });
  }
);

module.exports = strategy;
