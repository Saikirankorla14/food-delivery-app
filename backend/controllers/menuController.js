const MenuItem = require("../models/MenuItem");

exports.getAllMenuItems = async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
};

exports.createMenuItem = async (req, res) => {
  const newItem = new MenuItem(req.body);
  await newItem.save();
  res.status(201).json(newItem);
};
