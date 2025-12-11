const mongoose = require("mongoose");

const primarySkillSchema = new mongoose.Schema({
  value: String
}, { timestamps: true });

module.exports = mongoose.model("PrimarySkill", primarySkillSchema);
    