import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema(
  {
    resourceModelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resource",
      trim: true,
    },

    userId: {
      type: String,
      required: true,
      trim: true,
    },

    commentNote: {
      type: String,
      required: true,
      trim: true,
      maxlength: [1024, "Comment cannot exceed 1024 characters"],
    },
  },
  { timestamps: true }
);
