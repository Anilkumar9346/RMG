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
      type: String,       // Example: "Mon–Fri", "6 Days", "Alternate Saturdays"
      required: true,
      trim: true
    },

    workingTiming: {
      type: String,       // Example: "9AM–6PM", "Night Shift", "Rotational"
      required: true,
      trim: true
    },

    workingLocation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WorkingLocation",   // reference to your WorkingLocation model
      required: true
    }
  },
  { timestamps: true }
);
