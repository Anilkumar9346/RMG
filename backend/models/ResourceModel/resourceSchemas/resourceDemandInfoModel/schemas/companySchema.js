import mongoose from "mongoose";

export const companySchema = new mongoose.Schema(
  {
    companyName: {
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
