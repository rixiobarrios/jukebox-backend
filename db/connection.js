// we're importing mongoose from node_modules
const mongoose = require('mongoose');

// using native ES6 Promises, in place of mongoose's deprecated promise library
// `Promise` will provides us with a couple methods: .then() for success,
// and .catch() for errors
// mongoose.Promise = Promise;

// set the uri for connecting to our local mongodb
const mongoURI =
    process.env.NODE_ENV === 'production'
        ? process.env.DB_URL
        : 'mongodb://localhost:27017/songs';
console.log(mongoURI);

// connect to the database, with the imported mongoose instance
mongoose.connect(mongoURI, { useNewUrlParser: true });

// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration
module.exports = mongoose;
