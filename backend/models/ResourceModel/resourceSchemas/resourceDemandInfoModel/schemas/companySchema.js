import mongoose from "mongoose";
import { type } from "os";
import { stringify } from "querystring";

export const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    clientName: {
      type: String,
      required: true,
      trim: true,
    },

    clientContact: {
      type: String,
      required: true,
      trim: true,
    },

    experienceLevel:{
      type:String,
      require:true,
    },

    CompanyId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
