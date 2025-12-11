const mongoose = require("mongoose");

const workTimingSchema = new mongoose.Schema({
  value: String
}, { timestamps: true });

module.exports = mongoose.model("WorkTiming", workTimingSchema);
