const mongoose = require('./connection');
const songs = require('./seeds.json');
const Jukebox = require('../models/Jukebox');
Jukebox.deleteMany({})
    .then(() => {
        Jukebox.insertMany(songs);
    })
    .catch(err => console.error(err))
    .then(() => {
        console.log('We seeded data!!');
        process.exit();
    });
