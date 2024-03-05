const mongoose = require("mongoose");

const customLocationSchema = new mongoose.Schema({
  location: {
    type: String,
    default: "noPlace",
  },
});

const CustomLocations = mongoose.model("customLocations", customLocationSchema);

module.exports = CustomLocations;
