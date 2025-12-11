import mongoose from "mongoose";
import { workingLocationSchema } from "../schemas/workingLocationSchema.js";
import { contractDetailsSchema } from "../schemas/contractDetailsSchema.js";


export const WorkingLocation=mongoose.model(
    "WorkingLocation", 
    workingLocationSchema
);
export const ContractDetailsSchema=mongoose.model(
    "ContractDetailsSchema",
     contractDetailsSchema
);