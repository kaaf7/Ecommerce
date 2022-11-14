const router = require("express").Router();
const Cart = require("../models/Cart");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
  verifyJwtToken,
} = require("./verifytoken");

//add cart
router.post("/add", verifyTokenAndAuthorization, async (req, res) => {
  const qUserId = req.query.id;
  const cart = new Cart({
    userId: qUserId,
    products: req.body.products,
    _id: qUserId,
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
  try {
    const cart = await Cart.findOne({ userId: req.query.id });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update cart

router.put("/update", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findOneAndUpdate(
      req.query.id,
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
router.delete("/get/delete", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findOneAndDelete({ userId: req.query.id });
    res.status(200).json("deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
