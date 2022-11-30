const mongoose = require("mongoose");
/* create mongoDB schema for Cart with every essential detail*/
const FavoriteSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [],
    quantity: { type: Number, required: false },
  },
  { timestamps: true }
);

FavoriteSchema.set("toJSON", {
  transform: function (document, returnedObject) {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.id;
  },
});

module.exports = mongoose.model("Favorite", FavoriteSchema);
