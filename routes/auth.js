const express = require("express");
const router = express.Router();
const User = require("../models/userTable");
const passport = require("../config/passport");

router.post("/signup", function(req, res) {
  console.log("user signup");
  console.log(req.body, req.session);
  //   req.session.username = req.body.username;

  User.findOne({ user_name: req.body.user_name }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: "This username has already been taken."
      });
    } else {
      const newUser = new User({
        user_firstName: req.body.user_firstName,
        user_name: req.body.user_name,
        user_pass: req.body.user_pass
      });
      console.log("creating new user: ", newUser);
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
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
    console.log("routes/user.js, login, req.body: ", req.body);
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
    res.send({ msg: "logging out" });
    window.location.assign("/search");
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;

// var passport = require("passport");
// var settings = require("../config/settings");
// require("../config/passport")(passport);
// var express = require("express");
// var jwt = require("jsonwebtoken");
// var router = express.Router();
// var User = require("../models/userTable");

// // SIGNUP ROUTER
// router.post("/signup", function(req, res) {
//   if (!req.body.username || !req.body.password) {
//     res.json({ success: false, msg: "Please pass username and password." });
//   } else {
//     var newUser = new User({
//       user_firstName: req.body.firstName,
//       user_name: req.body.username,
//       user_pass: req.body.password
//     });
//     // save the user
//     newUser.save(function(err) {
//       if (err) {
//         return res.json({ success: false, msg: "Username already exists." });
//       }
//       res.json({ success: true, msg: "Successful created new user." });
//     });
//   }
// });

// // LOGIN
// router.post("/login", function(req, res) {
//   console.log("is the post working");
//   console.log(req.body.body.username);
//   User.findOne(
//     {
//       user_name: req.body.body.username
//     },
//     function(err, user) {
//       if (err) throw err;

//       if (!user) {
//         console.log('User is not authorized')
//         res
//           .status(401)
//           .send({
//             success: false,
//             msg: "Authentication failed. User not found."
//           });
//       } else {
//         if (user.user_pass === req.body.body.password) {
//           var token = jwt.sign(user.toJSON(), settings.secret);
//             // return the information including token as JSON
//             res.json({ success: true, token: "JWT: " + token });
//         }
//         else {
//           console.log("Password is incorrect");
//           res
//             .status(401)
//             .send({
//               success: false,
//               msg: "Password is incorrect."
//             });
//         }
//       }
//     }
//   );
// });
