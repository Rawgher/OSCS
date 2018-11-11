const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
    reply_author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    reply_post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    reply_content: { type: String, required: true },
    reply_rating: { type: Number, default: 0 },
    reply_update: {type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Reply = mongoose.model("Reply", ReplySchema);

module.exports = Reply;