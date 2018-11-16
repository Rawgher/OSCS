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


// display all replies of a post
router
  .route("/post/:id")
  .get(forumController.findRepliesByPostId)
  .post(forumController.createReply);

// creating a new post
router
  .route("/newpost")
  .get(forumController.findTopicById)
  .post(forumController.createPost);



// keep this at bottom
//display all posts of a topic
router
.route("/:id")
.get(forumController.findPostsByTopicId);

module.exports = router;
