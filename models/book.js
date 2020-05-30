const mongoose = require("mongoose");

module.exports = mongoose.model("Book", new mongoose.Schema({
    title: String,
    authors: [String],
    description: String,
    image: String,
    link: String
}));