const router = require("express").Router();
const forumController = require("../../controllers/forumController");
var passport = require('passport');
require('../../config/passport')(passport);

getToken = function(headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

// login
router.route("/Login").get(forumController.findUserById);

// account registration
router.route("/Registration").post(forumController.createUser);

// user account information
router.route("/Forum/UserPage").get(forumController.findUserById);

// display all topics
router
  .route("/Categories")
  .get(forumController.findAllTopics)
  .post(passport.authenticate("jwt", { session: false }), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      forumController.createTopic();
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  });

// display all posts of a topic
router
  .route("/Forum/Posts")
  .get(forumController.findTopicById)
  .post(passport.authenticate("jwt", { session: false }), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      forumController.createPost();
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  });

// display all replies of a topic
router
  .route("/Forum/ThisPost")
  .get(forumController.findPostById)
  .post(passport.authenticate("jwt", { session: false }), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      forumController.createReply();
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  });

module.exports = router;
