const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRout = require("./routes/auth");
const productRout = require("./routes/product");
const orderRout = require("./routes/order");
const cartRout = require("./routes/cart");
const favoriteRout = require("./routes/favorite");

const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(cors());
const PORT = process.env.PORT;
const URI = process.env.URI;
app.use(express.json());

app.listen(PORT, () => {
  console.log("connected");
});

mongoose
  .connect(URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/api", (req, res) => {
  res.send("API");
});

app.use("/api", userRoute);
app.use("/api/auth", authRout);
app.use("/api/products", productRout);
app.use("/api/orders", orderRout);
app.use("/api/cart", cartRout);
app.use("/api/favorite", favoriteRout);
