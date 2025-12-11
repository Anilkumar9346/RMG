const mongoose = require("mongoose");

const engagementTypeSchema = new mongoose.Schema({
  value: String
}, { timestamps: true });

module.exports = mongoose.model("EngagementType", engagementTypeSchema);
