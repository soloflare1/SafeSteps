const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  deviceId: String,
  lat: Number,
  lng: Number,
  mode: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Location", locationSchema);