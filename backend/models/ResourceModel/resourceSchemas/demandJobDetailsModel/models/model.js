import mongoose from "mongoose";
import { demandJobDetailsSchema } from "../schemas/demandJobDetailsSchema.js";
import { primarySkillSchema } from "../schemas/primarySkillSchema.js";
import { secondarySkillSchema } from "../schemas/secondarySkillSchema.js";


export const DemandJobDetails = mongoose.model("DemandJobDetails", demandJobDetailsSchema);
export const PrimarySkill = mongoose.model("PrimarySkill", primarySkillSchema);
export const SecondarySkill = mongoose.model("SecondarySkill", secondarySkillSchema);