const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    _id: { type: Number, required: true, unique: true },
    topic_author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    topic_name: { type: String, required: true },
    topic_description: { type: Text, required: true },
    topic_number: { type: Number, required: true },
    topic_posts: [{type: Schema.Types.ObjectId, ref: "Post"}],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;