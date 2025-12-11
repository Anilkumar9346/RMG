import mongoose from "mongoose";

export const demandJobDetailsSchema = new mongoose.Schema({
  primarySkill: {
    type: String,
    required: true
  },
  secondarySkill: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  uniqueId: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });


