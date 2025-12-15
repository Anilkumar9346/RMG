import mongoose from "mongoose";

export const demandTechnologySchema = new mongoose.Schema(
  {
    demandTechnologyName: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
  },
  { timestamps: true }
);
