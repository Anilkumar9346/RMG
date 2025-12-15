import mongoose from "mongoose";

export const companyDetailSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    companyLinkedId: {
      type: String,
      required: true,
      trim: true,
    },

    companyId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
