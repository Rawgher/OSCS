const express = require("express");
const router = express.Router();
const User = require("../models/userTable");
const passport = require("../config/passport");

router.post("/signup", function(req, res) {
  console.log("user signup");
  console.log(req.body, req.session);
  // req.session.username = req.body.username;

  User.findOne({ user_name: req.body.user_name }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
      res.json({
        error: "We're sorry, there appears to be an error with your sign-up."
      });
    } else if (user) {
      res.json({
        error: "This username has already been taken."
      });
    } else {
      const newUser = new User({
        user_firstName: req.body.user_firstName,
        user_lastName: req.body.user_lastName,
        user_name: req.body.user_name,
        user_pass: req.body.user_pass
      });
      console.log("creating new user: ", newUser);
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        console.log("saved new user to db");
        res.json(savedUser);
        passport.authenticate("local")(req, res, function() {
          console.log("logged new user in", req.user);
        });
      });
    }
  });
});

router.get("/", (req, res, next) => {
  console.log("===== user!! =====", req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post(
  "/login",
  function(req, res, next) {
    console.log("routes/auth.js, login, req.body: ", req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("logged in", req.user);
    var userInfo = {
      user_name: req.user.user_name,
      user_id: req.user._id
    };
    res.send(userInfo);
  }
);

router.post("/logout", (req, res) => {
  if (req.user) {
    console.log("logging out");
    req.logout();
    res.send();
  }
});

router.get(
  "/github",
  function(req, res, next) {
    console.log("routes/auth.js, github login, req.body: ", req.body);
    next();
  },
  passport.authenticate("github"),
  (req, res) => {
    console.log("github login user", res);
  }
);

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  function(req, res) {
    res.redirect("/user");
  }
);

module.exports = router;
