const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    topic_name: { type: String, required: true },
    topic_description: { type: Text, required: true },
    topic_number: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;