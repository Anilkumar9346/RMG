import mongoose from "mongoose";

export const demandTechnologySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },

    technologyId: {
      type: String,
      default: "",
      required: true
    }
  },
  { timestamps: true }
);
