const mongoose = require("mongoose");
/* create mongoDB schema for Cart with every essential detail*/
const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: false },
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

CartSchema.set("toJSON", {
  transform: function (document, returnedObject) {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
     delete returnedObject.__v;
     delete returnedObject.id;
    returnedObject.products.forEach((item) => delete item["_id"]);
  },
});

module.exports = mongoose.model("Cart", CartSchema);
