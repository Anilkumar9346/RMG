const mongoose = require("mongoose");

const demandTypeSchema = new mongoose.Schema({
  value: String
}, { timestamps: true });

module.exports = mongoose.model("DemandType", demandTypeSchema);
s