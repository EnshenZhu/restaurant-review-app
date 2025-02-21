const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,  // Image URL
  reviews: [
    {
      user: String,
      comment: String,
      rating: Number,
    }
  ],
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);