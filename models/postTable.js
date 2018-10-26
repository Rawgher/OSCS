const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    post_subject: { type: String, required: true },
    post_body: { type: Text, required: true },
    post_rating: { type: Number, default: 0 },
    post_number: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;