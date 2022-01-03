const mongoose = require("mongoose");

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

const User = mongoose.model("UserData", userSchemma, "user-data");

module.exports = {
  User,
};
