import mongoose from "mongoose";

export const resourceDemandInfoSchema = new mongoose.Schema(
  {
    demandId: {
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

    demandTechnologyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DemandTechnology",
      required: true
    },

    demandSubTechnologyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DemandSubTechnology",
      required: true
    },

    demandType: {
      type: String,
      required: true,
      trim: true
    },
  },
  { timestamps: true }
);
