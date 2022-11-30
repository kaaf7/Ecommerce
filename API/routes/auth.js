const router = require("express").Router();
const User = require("../models/User");
const Cart = require("../models/Cart");
const Favorite = require("../models/Favorite");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();

const jsonwebtoken = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;
const SECRET_KEY = process.env.SECRET_KEY;

//register
router.post("/register", async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, SECRET_KEY).toString(),
  });
  try {
    const savedUser = await user.save();
    const userId = savedUser._id;
    const cart = new Cart({
      userId: userId,
      //products: req.body.products,
    });
    const favorite = new Favorite({
      userId: userId,
      // products: req.body.products,
    });
    await Promise.all([cart.save(), favorite.save()]);
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    !user && res.status(401).json("wrong username");

    const accessToken = jsonwebtoken.sign(
      {
        id: user._id,
        username: user.username,
        //isAdmin: user.isAdmin,
      },
      JWT_KEY,
      {
        expiresIn: "1d",
      }
    );

    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    );

    const originalPassword = decryptedPassword.toString(CryptoJS.enc.Utf8);
    
    if (originalPassword !== req.body.password) {
      res.status(401).json("password is wrong");
    } else if (user.username !== req.body.username) {
      res.status(401).json("username is wrong");
    } else if (
      originalPassword !== req.body.password &&
      user.username !== req.body.username
    ) {
      res.status(401).json("wrong username and password");
    }
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(401).json("something went wrong");
  }
});

module.exports = router;
