const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    productTitle: { type: String, required: true, unique: true },
    productdescription: { type: String, required: true},
    productCategory: { type: Array, required: true },
    productPrice: { type: Number, required: true },
    productColor: { type: String, required: true },
    favorite: { type: Boolean, default: false },
    newProduct: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
