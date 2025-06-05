const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  address: { type: String, required: true },
  deliveryTime: { type: Number, required: true },
  minOrder: { type: Number, required: true },
  image: { type: String, required: true },
  rating: { type: Number, default: 0 },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
