import mongoose from "mongoose";

export const leadSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      trim: true,
    },

    leadName: {
      type: String,
      required: true,
      trim: true,
    },
    
    leadContact: {
      type: String,
      required: true,
      trim: true,
    },

    experienceLevel:{
      type:String,
      require:true,
    },

    leadId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
