import mongoose from "mongoose";

export const demandSubTechnologySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    technologyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DemandTechnology",
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
