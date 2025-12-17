import mongoose from "mongoose";
import { resourceDemandInfoSchema } from "../schemas/resourceDemandInfoSchema.js";
import { demandTechnologySchema } from "../schemas/demandTechnologySchema.js";
import { demandSubTechnologySchema } from "../schemas/demandSubTechnologySchema.js";
import { clientDetailSchema } from "../schemas/clientDetailSchema.js";
import { leadSchema } from "../schemas/leadSchema.js";


// Resource Demand Info Model
export const ResourceDemandInfo =  mongoose.models.ResourceDemandInfo ||
  mongoose.model("ResourceDemandInfo", resourceDemandInfoSchema);

// Demand Technology Model
export const DemandTechnology = mongoose.models.DemandTechnology || mongoose.model(
  "DemandTechnology",
  demandTechnologySchema
);

// Demand Sub Technology Model
export const DemandSubTechnology = mongoose.models.DemandSubTechnology || mongoose.model(
  "DemandSubTechnology",
  demandSubTechnologySchema
);

// Lead Model
export const Lead = mongoose.models.Lead || mongoose.model(
  "Lead",
  leadSchema
);

// Client Model
export const Client = mongoose.models.Client || mongoose.model(
  "Client",
  clientDetailSchema
);

