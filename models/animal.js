// Using mongo db

// import connection file
const mongoose = require('./connection');

// schema variable holds properties & data types to be put into our db
const animalSchema = new mongoose.Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
});

// pass model into our db
const AnimalModel = mongoose.model('animal', animalSchema)

// export
module.exports = AnimalModel;
