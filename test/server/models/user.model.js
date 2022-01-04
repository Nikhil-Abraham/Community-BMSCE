const mongoose = require("mongoose");

const userSchemma = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 6 },
    profilePicture: { type: String, default: "" },
    isAlumn: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    bio: { type: String, max: 50, default: "" },
    sem: { type: Number },
    github: { type: String, default: "" },
    linkedIn: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model("UserData", userSchemma, "user-data");

module.exports = {
  User,
};
