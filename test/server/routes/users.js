const User = require("../models/user.model");
const router = require("express").Router();
const bcrypt = require("bcrypt");

// Upddate User
router.get("/", (req, res) => {
  res.send("user route");
});
// Update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    console.log("flag 1");
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
      console.log("flag 1a");
    }
    try {
      console.log("flag 2");
      console.log(req.params.id);
      const Currentuser = await User.findOne({ id: req.params.id });
      console.log(Currentuser);
      await Currentuser.findOneAndUpdate(req.params.id, {
        $set: req.body,
      });
      console.log("flag 3");
      res.status(200).json("Account has been updated");
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});
// Delete UserData
// Get User
// Follow a user
// Unfollow a user

module.exports = router;
