const router = require("express").Router();
const forumController = require("../../controllers/forumController");
require("dotenv");
const nodemailer = require("nodemailer");
const path = require("path");

// login
router.route("/login").get(forumController.findUserById);

// account registration
router.route("/registration").post(forumController.createUser);

// user account information
router.route("/user/:id").get(forumController.findUserById);

// display all topics
router.route("/categories").get(forumController.findAllTopics);

// display all posts of a topic
router.route("/posts").get(forumController.findPostById);

// display post info for replies page
router.route("/postinfo/:id").get(forumController.findPostById);

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

// display topic info for posts page
router.route("/catinfo/:id").get(forumController.findTopicInfoById);

// fetch post count for topics
router.route("/topiccount/").get(forumController.countPostsByTopicId);

// fetch reply count for posts
router
  .route("/replycount/:id")
  .get(forumController.countRepliesOfPostsByTopicId);

// POST MAILER

var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "",
    pass: ""
  }
});

router.post("/aboutus", (req, res) => {
  var mailOptions = {
    from: `${req.body.email}`,
    to: process.env.ROGER,
    subject: `${req.body.email}`,
    text: `${req.body.question}`,
    replyTo: `${req.body.email}`
  };
  transporter.sendMail(mailOptions, function(err, res) {
    console.log(mailOptions);
    if (err) {
      console.log(err);
    } else {
      console.log("Your e-mail has been sent...");
    }
  });
  // res.redirect("/thankYou");
});

// keep this at bottom
//display all posts of a topic
router.route("/:id").get(forumController.findPostsByTopicId);

module.exports = router;
