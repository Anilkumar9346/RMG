import { body } from "express-validator";

export const addResourceValidator = [
  
  body("demandCategory").notEmpty().withMessage("Demand Category is required"),
  body("noOfResourcesNeeded")
    .notEmpty().withMessage("No. of resources needed is required")
    .isInt({ min: 1 }).withMessage("No. of resources must be greater than 0"),
  body("demandLevel").notEmpty().withMessage("Demand Level is required"),
  body("engagement").notEmpty().withMessage("Engagement is required"),
  body("demandTechnology").notEmpty().withMessage("Demand Technology is required"),
  body("demandSubTechnology").notEmpty().withMessage("Demand Sub-Technology is required"),
  body("demandType").notEmpty().withMessage("Demand Type is required"),

  body("clientNeed").notEmpty().withMessage("Client Need is required"),
  body("contractType").notEmpty().withMessage("Contract Type is required"),
  body("workingDays").notEmpty().withMessage("Working Days is required"),
  body("workTiming").notEmpty().withMessage("Work Timing is required"),
  body("workingLocation").notEmpty().withMessage("Working Location is required"),

  body("jobDescription")
    .notEmpty().withMessage("Job Description is required")
    .isLength({ min: 10 }).withMessage("Job Description must be at least 10 characters"),

  body("billingStartDate").notEmpty().withMessage("BillingStartDate is required"),
  body("demandStartDate").notEmpty().withMessage("DemandStartDate is required"),
  body("demandEndDate").notEmpty().withMessage("DemandEndDate is required"),
  body("tentativeDuration").notEmpty().withMessage("TentativeDuration is required"),
  body("demandDurationNote").notEmpty().withMessage("DemandDurationNote is required"),

  body("budgetType").notEmpty().withMessage("BudgetType is required"),
  body("billingStartDate").notEmpty().withMessage("BillingStartDate is required"),
  body("currency").notEmpty().withMessage("Currency is required"),
  body("demandBudgetNote").notEmpty().withMessage("DemandBudgetNote is required"),
  body("billingStartDate").notEmpty().withMessage("BillingStartDate is required"),
  body("billingStartDate").notEmpty().withMessage("BillingStartDate is required"),
];  
