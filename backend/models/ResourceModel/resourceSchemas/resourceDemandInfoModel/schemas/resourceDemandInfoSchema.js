import mongoose from "mongoose";

export const resourceDemandInfoSchema = new mongoose.Schema(
  {
    uniqueId: { 
      type: String, 
      required: true, 
      unique: true 
    },

    demandCategory: {
      type: String, 
      required: true
    },

    noOfResource: { 
      type: Number, 
      required: true, 
      min: 1 
    },

    demandLevel: { 
      type: String, 
      required: true 
    },

    engagement: { 
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
    demandType: { 
      type: String, 
      required: true 
    },

    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true
    },
  },
  { timestamps: true }
);
