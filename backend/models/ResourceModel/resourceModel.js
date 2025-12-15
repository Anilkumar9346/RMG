import mongoose from "mongoose";
import { resourceSchema } from "./ResourceSchema.js";

// Resource Demand Info Model
export const Resource = mongoose.model(
  "Resource",
   resourceSchema
);
