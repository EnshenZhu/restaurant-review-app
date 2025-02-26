const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
// If using Multer for image upload:
// const upload = require('../middleware/upload');

router.get('/', reviewController.getAllReviews);
// router.post('/', upload.single('image'), reviewController.createReview);
router.post('/', reviewController.createReview);

module.exports = router;