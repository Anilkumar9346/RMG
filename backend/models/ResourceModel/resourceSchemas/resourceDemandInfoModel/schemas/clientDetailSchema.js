import mongoose from "mongoose";

export const clientDetailSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
      trim: true,
    },

    clientLinkedId: {
      type: String,
      default:'',
      trim: true,
    },

    clientId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
