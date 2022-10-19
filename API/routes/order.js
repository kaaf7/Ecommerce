const router = require("express").Router();

const Order = require("../models/Order");
const {
  verifyJwtToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifytoken");

//create order

router.post("/", verifyJwtToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    req.status(200).json(savedOrder);
  } catch (err) {
    req.status(500).json(err);
  }
});

//updater order
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Delete Order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    res.status(200).json(`${deletedOrder} is deleted`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get user orders

router.get("/find/:uderId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.findOne({ userId: req.params.id });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all orders

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
