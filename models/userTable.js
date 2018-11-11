const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_name: { type: String, unique: true, required: true, trim: true },
    user_firstName: { type: String, required: true, trim: true },
    user_pass: { type: String, required: true, trim: true },
    user_level: { type: Number, required: true, default: 1},
    user_topics: [{type: Schema.Types.ObjectId, ref: "Topic"}],
    user_posts: [{type: Schema.Types.ObjectId, ref: "Post"}],
    user_replies: [{type: Schema.Types.ObjectId, ref: "Reply"}],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;