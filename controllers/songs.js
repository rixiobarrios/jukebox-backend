const express = require('express');
const Song = require('../models/Song');

const router = express.Router();

//return all songs
router.get('/', (req, res) => {
    Song.find({}).then(songs => {
        res.json(songs);
    });
});

//update one song
router.put('/:id', (req, res) => {
    console.log(req.body);
    Song.findByIdAndUpdate(req.params.id, req.body).then(() => {
        Song.find({}).then(songs => {
            res.json(songs);
        });
    });
});

//add one sog
router.post('/', (req, res) => {
    Song.create(req.body).then(() => {
        Song.find({}).then(songs => {
            res.json(songs);
        });
    });
});

//delete one gif
router.delete('/:id', (req, res) => {
    Song.findOneAndRemove({ _id: req.params.id }).then(() => {
        Song.find({}).then(songs => {
            res.json(songs);
        });
    });
});

module.exports = router;
