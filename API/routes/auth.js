const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();
const jsonwebtoken = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;
const SECRET_KEY = process.env.SECRET_KEY;

router.post("/register", async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, SECRET_KEY).toString(),
  });
  console.log("register");

  try {
    const savedUser = await user.save();
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
        isAdmin: user.isAdmin,
      },
      JWT_KEY,
      {
        expiresIn: "3d",
      }
    );

    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    );

    const Originalpassword = decryptedPassword.toString(CryptoJS.enc.Utf8);
    Originalpassword !== req.body.password &&
      res.status(401).json("password is wrong");
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
