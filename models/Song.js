const mongoose = require('../db/connection');

const SongSchema = new mongoose.Schema({
    artist: String,
    name: String,
    url: String
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
