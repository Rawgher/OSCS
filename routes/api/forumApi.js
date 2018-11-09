const router = require("express").Router();
const forumController = require("../../controllers/forumController");

// login
router
    .route("/Login")
    .get(forumController.findUserById)

// account registration
router
    .route("/Registration")
    .post(forumController.createUser)

// user account information
router
    .route("/Forum/UserPage")
    .get(forumController.findUserById);

// display all topics
router
    .route("/Categories")
    .get(forumController.findAllTopics)
    .post(forumController.createTopic);

// display all posts of a topic
router
    .route("/Forum/Posts")
    .get(forumController.findTopicById)
    .post(forumController.createPost);

// display all replies of a topic
router
    .route("/Forum/ThisPost")
    .get(forumController.findPostById)
    .post(forumController.createReply)












module.exports = router;
