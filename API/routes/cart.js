const router = require("express").Router();

const Cart = require("../models/Cart");
const {
  verifyJwtToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifytoken");

router.post("/id:", verifyTokenAndAuthorization, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get cart
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    req.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
