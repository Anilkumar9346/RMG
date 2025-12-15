import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema(
{
    resourceModelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resource",
      trim: true
    },

    userId:{
      type:String,
      required:true
    },

    commentNote: {
      type: String,
      required: true,
      trim: true
    },


},{ timestamps: true }
);

