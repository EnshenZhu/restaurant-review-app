const Review = require('../models/Review');

// GET /api/reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({}).populate('menuItem');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/reviews
exports.createReview = async (req, res) => {
  try {
    // If you're using uploaded image:
    // const imageUrl = req.file ? req.file.path : null;

    const newReview = new Review({
      menuItem: req.body.menuItem,
      comment: req.body.comment,
      rating: req.body.rating,
      imageUrl: req.body.imageUrl, // or path from file upload
    });

    const savedReview = await newReview.save();
    res.json(savedReview);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ... other methods (get one, update, delete)