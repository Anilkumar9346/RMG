const mongoose = require("mongoose");

const laptopProvidedBySchema = new mongoose.Schema({
  value: String
}, { timestamps: true });

module.exports = mongoose.model("LaptopProvidedBy", laptopProvidedBySchema);
