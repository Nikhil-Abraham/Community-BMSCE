const mongoose = require("mongoose");
const user = require("./user.model");

const postSchemma = new mongoose.Schema(
  {
    author: { type: user, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    members: { type: [], enum: [{ type: user }] },
  },
  { timestamps: true }
);

const Post = mongoose.model("Posts", postSchemma, "posts");

module.exports = {
  Post,
};
