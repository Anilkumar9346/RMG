import mongoose from "mongoose";

export const primarySkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    primaryUniqueId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DemandTechnology",
      required: true,
    },
  },
  { timestamps: true }
);
