const express = require('express');
const Jukebox = require('../models/Jukebox');

const router = express.Router();

//return all songs
router.get('/', (req, res) => {
    Jukebox.find({}).then(songs => {
        res.json(songs);
    });
});

//update one song
router.put('/:id', (req, res) => {
    console.log(req.body);
    Jukebox.findByIdAndUpdate(req.params.id, req.body).then(() => {
        Jukebox.find({}).then(songs => {
            res.json(songs);
        });
    });
});

//add one sog
router.post('/', (req, res) => {
    Jukebox.create(req.body).then(() => {
        Jukebox.find({}).then(songs => {
            res.json(songs);
        });
    });
});

//delete one gif
router.delete('/:id', (req, res) => {
    Jukebox.findOneAndRemove({ _id: req.params.id }).then(() => {
        Jukebox.find({}).then(songs => {
            res.json(songs);
        });
    });
});

module.exports = router;
