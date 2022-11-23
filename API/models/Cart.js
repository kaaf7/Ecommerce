const mongoose = require("mongoose");
/* create mongoDB schema for Cart with every essential detail*/
const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [],
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

CartSchema.set("toJSON", {
  transform: function (document, returnedObject) {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.id;
  },
});

module.exports = mongoose.model("Cart", CartSchema);
