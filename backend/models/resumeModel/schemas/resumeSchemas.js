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
      required:true
    },

    resumeRefName:{
      type:String,
      required:true
    },

    resumeRefPath:{
      type:String,
      required:true
    },

},{ timestamps: true }
);

