import mongoose from "mongoose";

export const clientSchema = new mongoose.Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CompanyDetail",
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

    clientId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
