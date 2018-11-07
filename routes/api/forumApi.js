const router = require("express").Router();
const forumController = require("../../controllers/forumController");

router
    .route("/")
    .get(forumController.findAllTopics)
    .post();

module.exports = router;
