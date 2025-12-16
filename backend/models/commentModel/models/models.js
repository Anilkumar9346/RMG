import mongoose from "mongoose";
import { commentSchema } from "../schema/commentSchema.js";

export const Comment = mongoose.model(
  "Comment",
   commentSchema
);
