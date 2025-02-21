const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

// Get all menu items
router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Upload menu item
router.post("/", async (req, res) => {
  const newItem = new MenuItem(req.body);
  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add a comment to a menu item
router.post("/:id/reviews", async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    menuItem.reviews.push(req.body);
    await menuItem.save();
    res.json(menuItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;