const mongoose = require("mongoose");

const demandCategorySchema = new mongoose.Schema({
  value: String
}, { timestamps: true });

module.exports = mongoose.model("DemandCategory", demandCategorySchema);
