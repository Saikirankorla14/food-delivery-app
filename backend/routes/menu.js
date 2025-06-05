const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

// Get menu items for a specific restaurant
router.get("/:restaurantId", async (req, res) => {
  try {
    const menuItems = await MenuItem.find({
      restaurantId: req.params.restaurantId,
    });
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new menu item (for restaurant owners/admin)
router.post("/", async (req, res) => {
  const menuItem = new MenuItem({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    restaurantId: req.body.restaurantId,
    image: req.body.image,
  });

  try {
    const newMenuItem = await menuItem.save();
    res.status(201).json(newMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
