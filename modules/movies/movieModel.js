const mongoose = require('mongoose');
const movieSchema = require('./movieSchema');
const Movie = mongoose.model('Movie', movieSchema , 'movies');

module.exports = Movie;