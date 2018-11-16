const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    topic_author: { type: String, required: true },
    topic_name: { type: String, required: true },
    topic_description: { type: String, required: true },
    topic_posts: [{type: Schema.Types.ObjectId, ref: "Post"}],
    topic_update: {type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;