const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    user: String,
    comment: String,
    rating: { type: Number, min: 1, max: 5 },
    imageUrl: String
});

module.exports = mongoose.model('Review', reviewSchema);