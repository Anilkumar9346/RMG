import mongoose from "mongoose";

export const workingLocationSchema = new mongoose.Schema(
  {
    uniqueId: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },

    description: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

