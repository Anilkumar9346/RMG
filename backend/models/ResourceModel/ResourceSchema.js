import mongoose from "mongoose";

export const ResourceSchema = new mongoose.Schema(
{
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

    demandTechnology: {
      type: String,
      required: true
    },

    demandSubTechnology: {
      type: String,
      required: true
    },

    demandType: {
      type: String,
      required: true,
      trim: true
    },

    companyName: {
      type: String,
      required: true,
    },

    clientName: {
      type: String,
      required: true,
    },

    clientContact: {
      type: String,
      required: true,
    },

    clientContactNo: {
      type: String,
      default:'',
    },

    experienceLevel: {
      type: String,
      required: true,
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
      enum: ["yes", "no"],
      required: true,
      trim: true
    },

    clientBGV_Verify: {
      type: String,
      enum: ["yes", "no"],
      required: true,
      trim: true
    },

    BGVNote:{
      type: String,
      default:''
    },


    primarySkill: {
      type: String,
      required: true
    },

    secondarySkill: {
      type: String,
      required: true
    },

    jobDescription: {
      type: String,
      required: true
    },


    billingStartDate: {
      type: Date,
      required: true
    },
    billingEndDate: {
      type: Date,
      required: true
    },
    tentativeDuration: {
      type: String,
      required: true
    },
    note: {
      type: String,
      default: ""
    },


    budgetType: {
      type: String,
      required: true,
      trim: true
    },
    billingStartDate: {
      type: Date,
      required: true
    },
    currency: {
      type: String,
      required: true,
      trim: true
    },
    note: {
      type: String,
      default: ""
    },
    budget: {
      type: Number,
      required: true
    },
    profitMargin: {
      type: Number,
      required: true
    },
    payoutType: {
      type: String,
      required: true,
      trim: true
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
      required: true,
      trim: true
    },

    paymentConfirmation: {
      type: String,
      required: true,
      trim: true
    },

    requirementResource: {
      type: String,
      required: true,
      trim: true
    },


    // name detail of sale persion
    nameOfTheSalePersion: {
      type: String,
      required: true,
      trim: true
    },

},{ timestamps: true }
);

