const mongoose = require("mongoose");
/* create mongoDB schema for Cart with every essential detail*/
const FavoriteSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: {
          type: Number,
          required: true,
        },
        price: { type: Number, required: true },
        color: { type: String, required: true },
        size: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favorite", FavoriteSchema);
