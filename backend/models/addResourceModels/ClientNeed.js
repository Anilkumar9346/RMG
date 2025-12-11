const mongoose = require("mongoose");

const clientNeedSchema = new mongoose.Schema({
  value: String
}, { timestamps: true });

module.exports = mongoose.model("ClientNeed", clientNeedSchema);
