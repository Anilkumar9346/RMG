import mongoose from "mongoose";
import { resumeSchema } from "../schemas/resumeSchemas.js";

export const Resume = mongoose.model.Resume ||  mongoose.model(
  "Resume",
   resumeSchema
);
