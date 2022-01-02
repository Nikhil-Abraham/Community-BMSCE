const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { User } = require("./models/user.model");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0.h7art.mongodb.net/test");

app.post("/api/register", async (req, res) => {
  try {
    await new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).save();
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate Email" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      res.json({ status: "ok", user: true });
    } else {
      res.json({ status: "error", user: false });
    }
    console.log(user);
  } catch (err) {
    console.log(err);
    res.json({ status: "error", user: false });
  }

  console.log(req.body.email);
  console.log(req.body.password);
});

app.listen(1337, () => {
  console.log("Server started on 1337");
});
