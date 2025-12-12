import mongoose from "mongoose";

export const demandSubTechnologySchema = new mongoose.Schema(
  {
    demandSubTechnologyName: {
      type: String,
      required: true,
      trim: true,
    },

    uniqueId: {
      type: String,
      required: true,
    },

    technologyParentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DemandTechnology",
      required: true,
    },
  },
  { timestamps: true }
);
