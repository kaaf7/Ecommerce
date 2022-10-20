const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifytoken");

const router = require("express").Router();

//get all products
router.get("/allproducts", async (req, res) => {
  const qFavorite = req.query.favorite;
  const qCategory = req.query.category;
  let products;
  if (qFavorite) {
    products = await Product.find().sort({ createdAt: -1 }).limit(5);
  } else if (qCategory) {
    products = await Product.find({
        productCategory: { $in: [qCategory] },
    });
  } else {
    products = await Product.find();
  }
  try {
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/allproducts", verifyTokenAndAdmin, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,

      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedProduct);
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
