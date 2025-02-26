const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// use Multer for image upload:
const upload = require('../middleware/upload');

router.get('/', menuController.getAllMenus);
router.post('/', upload.single('image'), menuController.createMenuItem);
router.post('/', menuController.createMenuItem);

module.exports = router;