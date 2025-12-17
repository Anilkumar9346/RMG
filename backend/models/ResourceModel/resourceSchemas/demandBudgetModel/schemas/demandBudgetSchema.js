import mongoose from "mongoose";

export const demandBudgetSchema = new mongoose.Schema({
  demandBudgetId: {
    type: String,
    required: true,
    trim: true
  },
  budgetType: {
    type: String,
    required: true,
    trim: true
  },
  demandBudgetBillingStartDate: {
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
    trim: true
  },
  paymentConformation: {
    type: String,
    enum:['L1','L2'],
    required: true
  }
}, { timestamps: true });
