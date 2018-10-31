const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: { type: Number, required: true, unique: true },
    user_name: { type: String, unique: true, required: true, trim: true },
    user_firstName: { type: String, required: true, trim: true },
    user_pass: { type: String, required: true, trim: true },
    user_level: { type: Number, required: true },  
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;