import mongoose from "mongoose";
import { resumeSchema } from "../schemas/ResumeSchemas";

export const Resume = mongoose.model(
  "Resume",
   resumeSchema
);
