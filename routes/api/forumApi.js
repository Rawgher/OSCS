const router = require("express").Router();
const forumController = require("../../controllers/forumController");
require("dotenv").config();
const nodemailer = require("nodemailer");
const path = require("path");

// login
router.route("/login").get(forumController.findUserById);

// account registration
router.route("/registration").post(forumController.createUser);

// user account information
router.route("/user/:user_name").get(forumController.findUserById);

// display all topics
router.route("/categories").get(forumController.findAllTopics);

// display post info for replies page
router.route("/postinfo/:id").get(forumController.findPostById);

// display all replies of a post
router.route("/post/:id").get(forumController.findRepliesByPostId);

// creating a new reply
router.route("/newreply").post(forumController.createReply);

// creating a new post
router.route("/newpost").post(forumController.createPost);

// display topic info for posts page
router.route("/catinfo/:id").get(forumController.findTopicInfoById);

// fetch post count for topics
router.route("/topiccount/").get(forumController.countPostsByTopicId);

// fetch reply count for posts
router
  .route("/replycount/:id")
  .get(forumController.countRepliesOfPostsByTopicId);

// keep this at bottom
//display all posts of a topic
router.route("/:id").get(forumController.findPostsByTopicId);

// POST MAILER

var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.email,
    pass: process.env.emailPW
  }
});

router.post("/aboutus", (req, res) => {
  var mailOptions = {
    from: `${req.body.email}`,
    to: process.env.email,
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

module.exports = router;
