const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
    _id: { type: Number, required: true, unique: true },
    reply_author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    reply_post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    reply_content: { type: Text, required: true },
    reply_rating: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Reply = mongoose.model("Reply", ReplySchema);

module.exports = Reply;