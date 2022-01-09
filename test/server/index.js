import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/user.model";
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postRoutes = require("./routes/posts");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0.h7art.mongodb.net/test");

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/posts", postRoutes);

app.post("/api/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    !user && res.status(404).json("user not found");
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.post("/api/profile", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      res.json({ status: "ok", user: true });
      user.name = req.body.name || user.name;
      user.profile = req.body.profile || user.profile;
      user.bio = req.body.bio || user.bio;
      user.semester = req.body.semester || user.semester;
      user.linked_in = req.body.linked_in || user.linked_in;
      user.github = req.body.github || user.github;

      const updatedUser = await user.save();

      res.json({
        name: updatedUser.name,
        profile: updatedUser.profile,
        bio: updatedUser.bio,
        semester: updatedUser.semester,
        linked_in: updatedUser.linked_in,
        github: updatedUser.github,
      });
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
