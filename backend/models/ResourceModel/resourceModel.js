import mongoose from "mongoose";
import { resourceSchema } from "./ResourceSchema";

// Resource Demand Info Model
export const Resource = mongoose.model(
  "Resource",
   resourceSchema
);
