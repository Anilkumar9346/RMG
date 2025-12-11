const mongoose = require("mongoose");

const workingLocationSchema = new mongoose.Schema({
  value: String
}, { timestamps: true });

module.exports = mongoose.model("WorkingLocation", workingLocationSchema);
