const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  note: {
    type: String,
    default: "",
  },
});

const Note = mongoose.model("notes", noteSchema);

module.exports = Note;
