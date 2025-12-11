import mongoose from "mongoose";

export const demandDurationSchema = new mongoose.Schema({
  billingStartDate: {
    type: Date,
    required: true
  },
  billingEndDate: {
    type: Date,
    required: true
  },
  tentativeDuration: {
    type: String, // or Number depending on how you want to store duration
    required: true
  },
  note: {
    type: String,
    default: ""
  },
  uniqueId: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true }); // optional timestamps for createdAt & updatedAt