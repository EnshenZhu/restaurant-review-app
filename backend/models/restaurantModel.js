const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    location: {
        lat: Number,
        lng: Number
    }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);