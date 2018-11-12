const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    post_author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    post_topic: { type: Schema.Types.ObjectId, ref: "Topic", required: true },
    post_subject: { type: String, required: true },
    post_body: { type: String, required: true },
    post_rating: { type: Number, default: 0 },
    post_number: { type: Number, required: true, unique: true},
    post_replies: [{ type: Schema.Types.ObjectId, ref: "Reply"}],
    post_update: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;