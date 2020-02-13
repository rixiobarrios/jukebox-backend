const mongoose = require('./connection');
const songs = require('./seeds.json');
const Song = require('../models/Song');
Song.deleteMany({})
    .then(() => {
        Song.collection.insert(songs);
    })
    .then(() => {
        console.log('We seeded data!!');
        process.exit();
    });
