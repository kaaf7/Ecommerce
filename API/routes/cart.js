/* * 👇
 *This cart route will be used in index.js
 *It is responsible for getting cart data on login
 *It is responsible for updating cart when product added is removed
 */

// require express router
const router = require("express").Router();

const Cart = require("../models/Cart");
const { verifyTokenAndAuthorization } = require("./verifytoken");

//add cart
router.post("/add", verifyTokenAndAuthorization, async (req, res) => {
  const userId = req.query.id;
  const cart = new Cart({
    userId: userId,
    products: req.body.products,
  });

  try {
    const savedCart = await cart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get cart
router.get("/find", verifyTokenAndAuthorization, async (req, res) => {
  const userId = req.query.id;
  try {
    const cart = await Cart.findOne({ userId: userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update cart
router.put("/update", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findOneAndUpdate(
      { userId: req.query.id },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete cart
router.delete("/delete", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findOneAndDelete({ userId: req.query.id });
    res.status(200).json("deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
