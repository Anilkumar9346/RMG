import mongoose from "mongoose";

export const demandJobDetailsSchema = new mongoose.Schema({
  primaryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "primarySkiSchema", // Reference to the Skill collection
    required: true
  },
  secondaryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Skill", // Reference to the Skill collection
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


