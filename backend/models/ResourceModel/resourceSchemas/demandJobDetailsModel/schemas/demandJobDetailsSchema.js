import mongoose from "mongoose";

export const demandJobDetailsSchema = new mongoose.Schema({
  primarySkillId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PrimarySkill",
    required: true
  },
  secondarySkillId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SecondarySkill",
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


