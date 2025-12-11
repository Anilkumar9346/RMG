const mongoose = require("mongoose");

const contractTypeSchema = new mongoose.Schema({
  value: String
}, { timestamps: true });

module.exports = mongoose.model("ContractType", contractTypeSchema);
