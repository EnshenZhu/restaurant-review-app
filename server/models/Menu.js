const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: String,
    price: Number,
    imageUrl: String, // For storing the image path/URL
});

module.exports = mongoose.model('Menu', MenuSchema);