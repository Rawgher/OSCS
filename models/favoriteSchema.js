const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    favorites_user: { type: String, required: true },
    favorites_stack: [],
    favorites_youtube: [],
    favorites_bing: [],
    favorites_forum:[]
})