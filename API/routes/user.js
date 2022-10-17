const { verifyTokenAndAuthorization,verifyTokenAndAdmin } = require("./verifytoken");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const User = require("../models/User");
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
const router = require("express").Router();

//GET one user by id
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others)
  } catch (err) {
    res.status(500).json("error");
  }
});

// GET ALL USERS


router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json("error");
  }
});



router.post("/:id", (req, res) => {});

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      SECRET_KEY
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json("error");
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user has been deleted")
  } catch (err) {
    res.status(600).json("error");
  }
});
module.exports = router;
