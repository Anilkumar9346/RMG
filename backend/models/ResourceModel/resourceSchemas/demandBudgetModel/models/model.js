import mongoose from "mongoose";
import { demandBudgetSchema } from "../schemas/demandBudgetSchema.js";

export const DemandBudget = mongoose.model("DemandBudget", demandBudgetSchema);