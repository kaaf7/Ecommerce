const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRout = require("./routes/auth");
const dotenv = require("dotenv");
dotenv.config();
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
app.get("/api", (req, res) => {
  res.send("test");
});

app.use("/api/test", userRoute);
app.use("/api", authRout);
