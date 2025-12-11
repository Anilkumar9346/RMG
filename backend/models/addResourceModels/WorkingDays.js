const mongoose = require("mongoose");

const workingDaysSchema = new mongoose.Schema({
  value: String
}, { timestamps: true });

module.exports = mongoose.model("WorkingDays", workingDaysSchema);
