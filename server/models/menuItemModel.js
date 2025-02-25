const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    imageUrl: String
});

module.exports = mongoose.model('MenuItem', menuItemSchema);