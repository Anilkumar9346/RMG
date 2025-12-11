import mongoose from "mongoose";
import { resourceDemandInfoSchema } from "../schemas/resourceDemandInfoSchema.js";
import { demandTechnologySchema } from "../schemas/demandTechnologySchema.js";
import { demandSubTechnologySchema } from "../schemas/demandSubTechnologySchema.js";

// Resource Demand Info Model
export const ResourceDemandInfo = mongoose.model(
  "ResourceDemandInfo",
  resourceDemandInfoSchema
);

// Demand Technology Model
export const DemandTechnology = mongoose.model(
  "DemandTechnology",
  demandTechnologySchema
);

// Demand Sub Technology Model
export const DemandSubTechnology = mongoose.model(
  "DemandSubTechnology",
  demandSubTechnologySchema
);
