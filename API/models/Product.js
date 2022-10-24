const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true},
    category: { type: Array, required: true },
    price: { type: Number, required: true },
    colors: { type: Array, required: true },
    favorite: { type: Boolean, default: false },
    isNew: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);

