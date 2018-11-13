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
router.route("/:id").get(forumController.findTopicById);

// display all replies of a topic
router
  .route("/post/:id")
  .get(forumController.findPostById)
  .post(forumController.createReply);

// posts new post to database
router.route("/newpost").post(forumController.createPost);

module.exports = router;
