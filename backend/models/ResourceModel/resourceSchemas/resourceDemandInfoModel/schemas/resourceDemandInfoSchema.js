import mongoose from "mongoose";

export const resourceDemandInfoSchema = new mongoose.Schema(
  {
    uniqueId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    demandCategory: {
      type: String,
      required: true,
      trim: true
    },

    noOfResource: {
      type: Number,
      required: true,
      min: 1
    },

    demandLevel: {
      type: String,
      required: true,
      trim: true
    },

    engagement: {
      type: String,
      required: true,
      trim: true
    },

    demandTechnology: {
      type: String,
      required: true
    },

    demandSubTechnology: {
      type: String,
      required: true
    },

    demandType: {
      type: String,
      required: true,
      trim: true
    },

    companyName: {
      type: String,
      required: true,
    },

    clientName: {
      type: String,
      required: true,
    },

    clientContact: {
      type: String,
      required: true,
    },

    clientContactNo: {
      type: String,
      default:'',
    },

    experienceLevel: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);
