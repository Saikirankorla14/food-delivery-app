const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Create new order
router.post("/", async (req, res) => {
  const order = new Order({
    items: req.body.items,
    total: req.body.total,
    deliveryAddress: req.body.deliveryAddress,
    paymentMethod: req.body.paymentMethod,
    customerId: req.body.customerId,
    restaurantId: req.body.restaurantId,
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get order status
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
