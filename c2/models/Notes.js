const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
     type: string, 
     required: true,
     unique: true,
     trim: true },
});

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
