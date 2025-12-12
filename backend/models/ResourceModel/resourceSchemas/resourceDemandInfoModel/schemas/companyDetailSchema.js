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

    companyAddress: {
      type: String,
      required: true,
      trim: true,
    },

    CompanyId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
