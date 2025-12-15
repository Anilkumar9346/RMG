import mongoose from "mongoose";
import { resourceSchema } from "./resourceSchema";

// Resource Demand Info Model
export const Resource = mongoose.model(
  "Resource",
   resourceSchema
);
