const db = require("../models");

module.exports = {
  // user collection queries
  findUserById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createUser: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deleteUser: function(req, res) {
    db.User.deleteOne(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // topic collection queries
  findAllTopics: function(req, res) {
    db.Topic.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findTopicById: function(req, res) {
    db.Topic.findById(req.query.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findTopicInfoById: function(req, res) {
    db.Topic.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findPostsByTopicId: function(req, res) {
    db.Topic.findById(req.params.id)
      .then(dbModel => {
        db.Post.find({ post_topic: dbModel.topic_name })
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },

  countPostsByTopicId: function(req, res) {
    db.Topic.find(req.query)
      .then(dbModel => {
        dbModel.forEach(eachTopic => {
          db.Post.find({ post_topic: eachTopic.topic_name })
            .then(dbPostModel => res.json(dbPostModel))
            .catch(err => res.status(422).json(err));
        });
      })
      .update({ topic_posts: dbPostModel.length })
      .catch(err => res.status(422).json(err));
  },

  countRepliesOfPostsByTopicId: function(req, res) {
    db.Topic.findById(req.params.id)
      .then(dbModel => {
        db.Post.find({ post_topic: dbModel.topic_name })
          .then(dbPostModel => res.json(dbPostModel))
          .then(dbPostModel => {
            dbPostModel
              .forEach(eachPost => {
                db.Reply.find({ reply_post: eachPost.post_subject })
                  .then(dbReplyModel => {
                    db.Post.find({ post_subject: dbReplyModel.reply_post })
                      .update({ post_replies: dbReplyModel.length })
                      .then(dbUpdatedPostModel);
                  })
                  .catch(err => res.status(422).json(err));
              })
              .catch(err => res.status(422).json(err));
          })
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },

  createTopic: function(req, res) {
    db.Topic.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deleteTopic: function(req, res) {
    db.Topic.deleteOne(req.query.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // post collection queries
  findAllPosts: function(req, res) {
    db.Post.find(req.params)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findRepliesByPostId: function(req, res) {
    db.Post.findById(req.params.id)
      .then(dbModel => {
        db.Reply.find({ reply_post: dbModel.post_subject })
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },

  findPostById: function(req, res) {
    db.Post.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createPost: function(req, res) {
    db.Post.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
      .then(dbTopicModel => {
        db.Topic.find({ topic_name: dbModel.post_topic })
          .update({ topic_update: dbModel.post_update })
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },

  deletePost: function(req, res) {
    db.Post.deleteOne(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // reply collection queries
  findAllReplies: function(req, res) {
    db.Reply.find(req.params)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findReplyById: function(req, res) {
    db.Reply.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createReply: function(req, res) {
    db.Reply.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
      .then(dbPostModel => {
        db.Post.find({ post_subject: dbModel.reply_post })
          .update({ post_update: dbModel.reply_update })
          .catch(err => res.status(422).json(err))
          .then(dbTopicModel => {
            db.Topic.find({ topic_name: dbPostModel.post_topic })
              .update({ topic_update: dbModel.reply_update })
              .catch(err => res.status(422).json(err));
          })
          .catch(err => res.status(422).json(err));
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deleteReply: function(req, res) {
    db.Reply.deleteOne(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // favorites collection queries

  createFavorite: function(req, res) {
    db.Favorites.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
