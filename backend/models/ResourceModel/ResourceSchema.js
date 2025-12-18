import mongoose from "mongoose";

// resource model
export const resourceSchema = new mongoose.Schema(
{
    resourceId:{
      type: String,
      required: true,
      trim: true
    },
    
	  resourceDemandInfoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ResourceDemandInfo",
      trim: true
    },


    contractDetailsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ContractDetails",
      trim: true
    },
  



    demandDurationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DemandDuration",
      trim: true
    },



    demandBudgetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DemandBudget",
      trim: true
    },


    jobDescription: {
      type: String,
      required: true
    },

    // interview process
    modeOfInterview: {
      type: String,
      required: true,
      trim: true
    },

    interviewNote: {
      type: String,
      required: true,
      trim: true
    },

    // Screening Type
    budgetStatus: {
      type: String,
      required: true,
      trim: true
    },

    techProfile: {
      type: String,
      required: true,
    },

    contractToHire: {
      type: String,
      enum:["Yes", "No", "yes", "no"],
      required: true,
      trim: true
    },

    requirementResource: {
      type: String,
      required: true,
      trim: true
    },


    // name detail of sale persion
    nameOfTheSalesPerson: {
      type: String,
      required: true,
      trim: true
    },

    //status of that resource
    resourceStatus: {
      type: String,
      required: true,
      trim: true
    },
    
},{ timestamps: true }
);

