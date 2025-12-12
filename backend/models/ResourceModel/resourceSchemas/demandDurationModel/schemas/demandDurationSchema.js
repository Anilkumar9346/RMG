import mongoose from "mongoose";

export const demandDurationSchema = new mongoose.Schema({
  demandStartDate: {
    type: Date,
    required: true
  },
  demandEndDate: {
    type: Date,
    required: true
  },
  tentativeDuration: {
    type: String,
    required: true
  },
  
  demandDurationNote: {
    type: String,
    default: ""
  },
  uniqueId: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });