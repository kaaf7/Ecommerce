const router = require("express").Router();
const Favorite = require("../models/Favorite");

const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
  verifyJwtToken,
} = require("./verifytoken");

//add favorite
router.post("/add", verifyTokenAndAuthorization, async (req, res) => {
  const qUserId = req.query.id;
  const favorite = new Favorite({
    userId: qUserId,
    products: req.body.products,
    _id: qUserId,
  });

  try {
    const savedFavorite = await favorite.save();
    res.status(200).json(savedFavorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get favorite
router.get("/find", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const favorite = await Favorite.findOne({ userId: req.query.id });
    res.status(200).json(favorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update favorite

router.put("/update", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updateFavorite = await Favorite.findOneAndUpdate(
      req.query.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateFavorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete favorite
router.delete("/get/delete", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Favorite.findOneAndDelete({ userId: req.query.id });
    res.status(200).json("deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const favorite = await Favorite.find();
    res.status(200).json(favorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
