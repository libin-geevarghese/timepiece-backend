const mongoose = require("mongoose");

const routineSchema = new mongoose.Schema({
  timeOfDay: {
    type: String,
    required: true,
    enum: ["morning", "noon", "evening", "night"],
  },
  routines: {
    type: String,
    required: true,
  },
  sunday: {
    type: Boolean,
    default: true,
  },
  monday: {
    type: Boolean,
    default: true,
  },
  tuesday: {
    type: Boolean,
    default: true,
  },
  wednesday: {
    type: Boolean,
    default: true,
  },

  thursday: {
    type: Boolean,
    default: true,
  },
  friday: {
    type: Boolean,
    default: true,
  },
  saturday: {
    type: Boolean,
    default: true,
  },
});

const Routine = mongoose.model("routines", routineSchema);

module.exports = Routine;
