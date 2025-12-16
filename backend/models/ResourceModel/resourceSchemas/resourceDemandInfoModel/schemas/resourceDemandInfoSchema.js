import mongoose from "mongoose";

export const resourceDemandInfoSchema = new mongoose.Schema(
  {
    resourceInfoId: { 
      type: String, 
      required: true, 
      unique: true 
    },

    demandCategory: {//change
      type: String, 
      required: true
    },

    noOfResource: { 
      type: Number, 
      required: true, 
      min: 1 
    },

    demandLevel: { //change
      type: String, 
      required: true 
    },

    engagement: { //change
      type: String, 
      required: true 
    },
    
    demandTechnology: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "DemandTechnology", 
      required: true 
    },

    demandSubTechnology: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "DemandSubTechnology",
      required: true 
    },
    
    demandType: { //change
      type: String, 
      required: true 
    },

    leadId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
      required: true
    },
  },
  { timestamps: true }
);
