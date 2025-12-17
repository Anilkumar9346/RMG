import mongoose from "mongoose";
import { contractDetailsSchema } from "../schemas/contractDetailsSchema.js";

export const ContractDetails = mongoose.models.ContractDetails || mongoose.model(
    "ContractDetails",
     contractDetailsSchema
);