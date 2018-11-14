const router = require("express").Router();
const forumController = require("../../controllers/forumController");

// login
router.route("/login").get(forumController.findUserById);

// account registration
router.route("/registration").post(forumController.createUser);

// user account information
router.route("/user/:id").get(forumController.findUserById);

// display all topics
router
  .route("/categories")
  .get(forumController.findAllTopics)
  .post(forumController.createTopic);

// display all posts of a topic
router.route("/posts").get(forumController.findPostById);

// display all replies of a topic
router
  .route("/posts/:id")
  .get(forumController.findPostById)
  .post(forumController.createReply);

// creating a new post
router
  .route("/newpost")
  .get(forumController.findTopicById)
  .post(forumController.createPost);

module.exports = router;
