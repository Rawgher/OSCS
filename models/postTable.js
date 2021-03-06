const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  post_author: { type: String, required: true },
  post_topic: { type: String, required: true },
  post_subject: { type: String, required: true },
  post_body: { type: String, required: true },
  post_rating: { type: Number, default: 0 },
  post_replies: { type: Number, default: 0 },
  post_update: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
