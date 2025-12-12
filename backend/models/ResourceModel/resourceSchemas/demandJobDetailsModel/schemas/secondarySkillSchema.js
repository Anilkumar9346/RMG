import mongoose from "mongoose";

export const secondarySkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },

    primarySkillId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PrimarySkill",
      required: true
    },

    secondaryUniqueId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
