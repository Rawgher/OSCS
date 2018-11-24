const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    favorites_user: { type: String, required: true },
    favorites_stack: [{
        stack_title: { type: String },
        stack_url: { type: String }
    }],
    favorites_youtube: [],
    favorites_bing: [],
    favorites_forum:[]
});

const Favorites = mongoose.model("Favorites", favoriteSchema);

module.exports = Favorites;
