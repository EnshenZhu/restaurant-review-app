const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    restaurantRating: {
        type: Number,
        required: true
    },
    restaurantPhoto: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);