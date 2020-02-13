const express = require('express');

const app = express();

const songsController = require('./controllers/songs');

const cors = require('cors');

//implement middleware
app.use(express.json()); //parse requests
app.use(express.urlencoded({ extended: true })); //allow nested object requests
app.use(cors()); //allow multi-origin requests

// app.use(methodOverride("_method"));
app.use('/songs', songsController);

app.listen(4000, () => console.log('Blasting Deathmetal on port 4000'));
