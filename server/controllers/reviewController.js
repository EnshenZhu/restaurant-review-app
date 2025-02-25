const Review = require('../models/reviewModel');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage }).single('image');

exports.uploadImage = (req, res) => {
    upload(req, res, (err) => {
        if (err) return res.status(500).json({ message: err.message });
        res.json({ imageUrl: `/uploads/${req.file.filename}` });
    });
};