import mongoose from "mongoose";

export const workingLocationSchema = new mongoose.Schema(
  {
    uniqueId: {
      type: String,
      required: true,
      unique: true
    },
    location: {
      type: String,
      required: true,
    },
    
    description: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

