import mongoose from "mongoose";

export const resumeSchema = new mongoose.Schema(
{
    resourceModelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resource",
      trim: true
    },

    recruterId:{
      type:String,
      required:true,
    },

    resumeRefName:{
      type:String,
      required:true,
      default:'Anil-Resume'
    },

    resumeRefPath:{
      type:String,
      required:true,
      unique:true
    },

    resumeStatus:{
      type:String,
      enum:["Pending", "Fullfilled", "Hold", "Rejected"]
    },
    candidateName:{
      type:String,
      required:true
    },

    candidateEmail:{
      type:String,
      required:true
    },

    candidateExperience:{ 
      type:Number,
      required:true
    },
    resumeSource:{
      type:String
    },
    candidateCurrentCTC:{
      type:String,
      required:true
    },
    candidateExpectedCTC:{
      type:String,
      required:true
    },
  candidateStatusTimeline: {
    type: [String],
    enum: ["Screening_Scheduled","Interview_Scheduled","Interview_Cleared","HR_Cleared","Offered","Accepted","Onboarded","Rejected","Hold"],
    default: ["Screening_Scheduled"]
  }


},{ timestamps: true }
);

