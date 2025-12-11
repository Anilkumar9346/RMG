const mongoose = require("mongoose");

const demandTechnologySchema = new mongoose.Schema({
  value: String
}, { timestamps: true });

module.exports = mongoose.model("DemandTechnology", demandTechnologySchema);
