const mongoose = require("mongoose");

const noOfResourcesSchema = new mongoose.Schema({
  value: Number
}, { timestamps: true });

module.exports = mongoose.model("NoOfResources", noOfResourcesSchema);
