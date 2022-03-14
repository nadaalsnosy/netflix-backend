const mongoose = require('mongoose');
const listSchema = require('./listSchema');
const List = mongoose.model('List', listSchema , 'lists');

module.exports = List;