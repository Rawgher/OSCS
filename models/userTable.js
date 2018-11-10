const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  user_name: { type: String, unique: true, required: true, trim: true },
  user_firstName: { type: String, required: true, trim: true },
  user_pass: { type: String, required: true, trim: true },
  user_level: { type: Number, required: true },
  user_topics: [{ type: Schema.Types.ObjectId, ref: "Topic" }],
  user_posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  user_replies: [{ type: Schema.Types.ObjectId, ref: "Reply" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

UserSchema.pre("save", function(next) {
  var user = this;
  if (this.isModified("user_pass") || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.user_pass, salt, null, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.user_pass = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.user_pass, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
