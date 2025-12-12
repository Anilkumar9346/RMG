import mongoose from "mongoose";

export const primarySkillSchema = new mongoose.Schema(
  {
    Skill: {
      type: String,
      required: true,
      unique: true
    },
    primaryUniqueId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
