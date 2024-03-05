const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  eventName: {
    type: String,
    // required: true,
    default: "000",
  },
  eventDetails: {
    type: String,
    // required: true,
    default: "000",
  },
  location: {
    type: String,
    // required: true,
    default: "000",
  },
  date: {
    type: String,
    // required: true,
    default: "000",
  },
  time: {
    type: String,
    // required: true,
    default: "000",
  },
  isImportant: {
    type: Boolean,
    default: false,
  },
  isArchieved: {
    type: Boolean,
    default: false,
  },

  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
