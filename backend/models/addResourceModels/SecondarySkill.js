const mongoose = require("mongoose");

const secondarySkillSchema = new mongoose.Schema({
  value: String
}, { timestamps: true });

module.exports = mongoose.model("SecondarySkill", secondarySkillSchema);
