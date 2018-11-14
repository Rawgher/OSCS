const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    user_name: { type: String, unique: true, required: true, trim: true },
    user_firstName: { type: String, required: true, trim: true },
    user_lastName: { type: String, required: true, trim: true },
    user_pass: { type: String, required: true, trim: true },
    user_level: { type: Number, required: true, default: 1},
    user_topics: [{type: Schema.Types.ObjectId, ref: "Topic"}],
    user_posts: [{type: Schema.Types.ObjectId, ref: "Post"}],
    user_replies: [{type: Schema.Types.ObjectId, ref: "Reply"}],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Define schema methods
UserSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.user_pass);
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10);
    }
}

// Define pre hooks for the save method
UserSchema.pre('save', function(next) {
    if (!this.user_pass) {
        console.log('models/userTable.js ========NO PASSWORD PROVIDED =========');
        next();
    } else {
        console.log('models/userTable.js hashPassword in pre save');
        this.user_pass = this.hashPassword(this.user_pass);
        next();
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;