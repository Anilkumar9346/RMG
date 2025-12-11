const mongoose = require("mongoose");

const demandLevelSchema = new mongoose.Schema({
  value: String
}, { timestamps: true });

module.exports = mongoose.model("DemandLevel", demandLevelSchema);
