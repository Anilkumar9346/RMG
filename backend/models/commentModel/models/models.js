import mongoose from "mongoose";
import { commentSchema } from "../schema/commentSchema";

export const Comment = mongoose.model(
  "Comment",
   commentSchema
);
