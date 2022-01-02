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
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    res.json({ status: "ok", user: true });
  } else {
    res.json({ status: "error", user: false });
  }
});

app.get("/hello", (req, res) => {
  res.send("Hello Bitches");
});

app.listen(1337, () => {
  console.log("Server started on 1337");
});
