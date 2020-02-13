const mongoose = require('../db/connection');

const JukeboxSchema = new mongoose.Schema({
    artist: String,
    name: String,
    url: String
});

const Jukebox = mongoose.model('Jukebox', JukeboxSchema);

module.exports = Jukebox;
