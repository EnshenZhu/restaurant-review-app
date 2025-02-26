const Menu = require('../models/Menu');

// GET /api/menus
exports.getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find({}).populate('restaurant');
    res.json(menus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/menus
exports.createMenuItem = async (req, res) => {
  try {
    // If you're storing uploaded images:
    // const imageUrl = req.file ? req.file.path : null;

    const newMenuItem = new Menu({
      restaurant: req.body.restaurant,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      imageUrl: req.body.imageUrl, // or the path from file upload
    });

    const savedMenuItem = await newMenuItem.save();
    res.json(savedMenuItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ... other methods (get one, update, delete)