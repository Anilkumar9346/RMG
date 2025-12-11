const mongoose = require("mongoose");

const demandSubTechnologySchema = new mongoose.Schema({
  value: String
}, { timestamps: true });

module.exports = mongoose.model("DemandSubTechnology", demandSubTechnologySchema);
