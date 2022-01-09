const mongoose = require("mongoose");

<<<<<<< HEAD
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
=======
const userSchemma = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: { type: Image},
  bio: {type: String},
  semester: {type: String},
  linked_in: {type: String},
  github: {type: String},

});
>>>>>>> c98a892533bf5aaecf8624f0a00466bf26901c81

const User = mongoose.model("UserData", userSchemma, "user-data");

module.exports = {
  User,
};
