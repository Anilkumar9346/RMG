import mongoose from "mongoose";

export const demandBudgetSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
    trim: true
  },
  budgetType: {
    type: String,
    required: true,
    trim: true
  },
  billingStartDate: {
    type: Date,
    required: true
  },
  currency: {
    type: String,
    required: true,
    trim: true
  },
  demandBudgetNote: {
    type: String,
    default: ""
  },
  budget: {
    type: Number,
    required: true
  },
  profitMargin: {
    type: Number,
    required: true
  },
  payoutType: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true });
