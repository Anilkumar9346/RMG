import mongoose from "mongoose";
import { demandJobDetailsSchema } from "../schemas/demandJobDetailsSchema.js";
import { primarySkillSchema } from "../schemas/primarySkillSchema.js";
import { secondarySkillSchema } from "../schemas/secondarySkillSchema.js";


export const DemandJobDetailsModel = mongoose.model("DemandJobDetailsModel", demandJobDetailsSchema);
export const PrimarySkillModel = mongoose.model("PrimarySkillModel", primarySkillSchema);
export const SecondarySkillModel = mongoose.model("SecondarySkillModel", secondarySkillSchema);