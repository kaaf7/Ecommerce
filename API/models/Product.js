const mongoose = require("mongoose");

/* create mongoDB schema for Products with every essential detail*/
const ProductSchema = new mongoose.Schema(
  {
    productTitle: { type: String, required: true, unique: false },
    description: { type: String, required: true },
    category: { type: Array, required: true },
    price: { type: Number, required: true },
    colors: { type: Array, required: true },
    favorite: { type: Boolean, default: false },
    isNew: { type: Boolean, default: true },
    images: { type: Array, required: true },
    video: { typye: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
