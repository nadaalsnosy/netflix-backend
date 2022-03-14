const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  trailer: {
    type: String,
  },
  video: {
    type: String,
  },
  genre: {
    type: String,
  },
  series: {
    type: Boolean,
    default: false,
  },
});

module.exports = movieSchema;
