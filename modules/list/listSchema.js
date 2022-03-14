const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
  },
  type: {
    type: String,
  },
  genre: {
    type: String,
  },
  content: {
    type: Array,
  },
});

module.exports = listSchema;
