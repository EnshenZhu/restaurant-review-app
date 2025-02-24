const MenuItem = require('../models/menuItemModel');

exports.getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find().populate('restaurant');
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};