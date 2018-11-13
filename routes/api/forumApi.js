const router = require("express").Router();
const forumController = require("../../controllers/forumController");

// login
router
    .route("/login")
    .get(forumController.findUserById)

// account registration
router
    .route("/registration")
    .post(forumController.createUser)

// user account information
router
    .route("/forum/userpage")
    .get(forumController.findUserById);

// display all topics
router
    .route("/categories")
    .get(forumController.findAllTopics)
    .post(forumController.createTopic);

// display all posts of a topic
router
    .route("/posts")
    .get(forumController.findTopicById)
    .post(forumController.createPost);

// display all replies of a topic
router
    .route("/forum/thispost")
    .get(forumController.findPostById)
    .post(forumController.createReply)












module.exports = router;
