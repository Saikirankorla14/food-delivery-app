const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  status: { type: String, default: "Processing" },
  customerId: { type: mongoose.Schema.Types.ObjectId, required: true },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
