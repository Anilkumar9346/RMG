import mongoose from "mongoose";

export const contractDetailsSchema = new mongoose.Schema(
  {
    contractDetailsId: {
      type: String,
      required: true,
      unique: true
    },

    clientNeed: {
      type: String,
      required: true,
      trim: true
    },

    contractType: {
      type: String,
      required: true,
      trim: true
    },

    workingDays: {
      type: String,
      required: true,
      trim: true
    },

    workingTiming: {
      type: String,
      required: true,
      trim: true
    },

    workingLocation: {
      type: String,
      required: true
    },

    workingMode: {
      type: String,
      required: true,
      trim: true
    },

    laptopProvideBy:{
      type:String,
      required:true
    },

    isBGVRequired: {
      type: Boolean,
      enum: ["Yes", "No", "yes", "no"],
      required: true,
      trim: true
    },

    clientBGV_Verify: {
      type: Boolean,
      enum: ["Yes", "No", "yes", "no"],
      required: true,
      trim: true
    },

    BGVNote:{
      type: String,
      default:''
    }

  },
  { timestamps: true }
);
