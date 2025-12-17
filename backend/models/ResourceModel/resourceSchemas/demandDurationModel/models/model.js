import mongoose from "mongoose";
import { demandDurationSchema } from "../schemas/DemandDurationSchema.js";

export const DemandDuration = mongoose.models.DemandDuration || mongoose.model("DemandDuration", demandDurationSchema);