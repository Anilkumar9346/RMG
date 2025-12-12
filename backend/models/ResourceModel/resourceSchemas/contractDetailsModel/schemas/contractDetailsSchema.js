import mongoose from "mongoose";

export const contractDetailsSchema = new mongoose.Schema(
  {
    uniqueId: {
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

    laptopProvide:{
      type:String,
      required:true
    },

    BGV: {
      type: String,
      enum: ["Yes", "No"],
      trim: true,
      default:"No"
    },

    clientBGV_Verify: {
      type: String,
      enum: ["Yes", "No"],
      trim: true,
      default:"No"
    },

    BGVNote:{
      type: String,
      default:''
    }

  },
  { timestamps: true }
);
