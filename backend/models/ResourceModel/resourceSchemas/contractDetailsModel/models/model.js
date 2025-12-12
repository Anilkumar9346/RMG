import mongoose from "mongoose";
import { contractDetailsSchema } from "../schemas/contractDetailsSchema.js";

export const ContractDetails = mongoose.model(
    "ContractDetails",
     contractDetailsSchema
);