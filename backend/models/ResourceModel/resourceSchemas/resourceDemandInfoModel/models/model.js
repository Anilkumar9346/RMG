import mongoose from "mongoose";
import { resourceDemandInfoSchema } from "../schemas/resourceDemandInfoSchema.js";
import { demandTechnologySchema } from "../schemas/demandTechnologySchema.js";
import { demandSubTechnologySchema } from "../schemas/demandSubTechnologySchema.js";
import { clientSchema } from "../schemas/clientSchema.js";
import { companyDetailSchema } from "../schemas/companyDetailSchema.js";

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

// Client Model
export const Client = mongoose.model(
  "Client",
  clientSchema
);

// CompanyDetail Model
export const CompanyDetail = mongoose.model(
  "CompanyDetail",
  companyDetailSchema
);

