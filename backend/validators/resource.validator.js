import { body } from "express-validator";

export const addResourceValidator = [

  //ResourceDemandInfo Validation 
  body("resourceDemandInfo.demandCategory")
    .notEmpty().withMessage("Demand Category is required"),

  body("resourceDemandInfo.noOfResource")
    .notEmpty().withMessage("No. of resources needed is required")
    .isInt({ min: 1 }).withMessage("No. of resources must be greater than 0"),

  body("resourceDemandInfo.demandLevel")
    .notEmpty().withMessage("Demand Level is required"),

  body("resourceDemandInfo.engagement")
    .notEmpty().withMessage("Engagement is required"),

  body("resourceDemandInfo.demandTechnologyName")
    .notEmpty().withMessage("Demand Technology is required"),

  body("resourceDemandInfo.demandSubTechnologyName")
    .notEmpty().withMessage("Demand Sub-Technology is required"),

  body("resourceDemandInfo.demandType")
    .notEmpty().withMessage("Demand Type is required"),

  //ContractDetails Validation 
  body("contractDetails.clientNeed")
    .notEmpty().withMessage("Client Need is required"),

  body("contractDetails.contractType")
    .notEmpty().withMessage("Contract Type is required"),

  body("contractDetails.workingDays")
    .notEmpty().withMessage("Working Days is required"),

  body("contractDetails.workingTiming")
    .notEmpty().withMessage("Work Timing is required"),

  body("contractDetails.workingLocation")
    .notEmpty().withMessage("Working Location is required"),

  body("contractDetails.workingMode")
    .notEmpty().withMessage("workingMode  is required"),

  body("contractDetails.laptopProvideBy")
    .notEmpty().withMessage("laptopProvideBy field  is required"),

  body("contractDetails.isBGVRequired")
    .notEmpty().withMessage("isBGVRequired is required"),  

  body("contractDetails.clientBGV_Verify")
  .notEmpty().withMessage("clientBGV_Verify is required"),

  // Demand Job Validation
  body("demandJobDetails.jobDescription")
    .notEmpty().withMessage("Job Description is required")
    .isLength({ min: 10 }).withMessage("Job Description must be at least 10 characters"),

  // Demand Duration Validation
  body("demandDurationInfo.billingStartDate")
    .notEmpty().withMessage("Billing Start Date is required"),

  body("demandDurationInfo.billingEndDate")
    .notEmpty().withMessage("Billing End Date is required"),

  body("demandDurationInfo.tentativeDuration")
    .notEmpty().withMessage("Tentative Duration is required"),

  body("demandDurationInfo.demandDurationNote")
    .optional(),

  // Demand Budget Validation
  body("demandBudgetInfo.budgetType")
    .notEmpty().withMessage("Budget Type is required"),

  body("demandBudgetInfo.demandBudgetBillingStartDate")
    .notEmpty().withMessage("Budget Billing Start Date is required"),

  body("demandBudgetInfo.currency")
    .notEmpty().withMessage("Currency is required"),

  body("demandBudgetInfo.demandBudgetNote")
    .optional(),

  body("demandBudgetInfo.paymentConformation")
    .notEmpty().withMessage("Payment Confirmation is required"),

  // Demand Interview Details Validation
  body("demandInterviewDetails.modeOfInterview")
    .optional(),

  body("demandInterviewDetails.interviewNote")
    .optional(),

  body("demandInterviewDetails.budgetStatus")
    .notEmpty().withMessage("Budget Status is required"),

  body("demandInterviewDetails.techProfile")
    .notEmpty().withMessage("Tech Profile is required"),

  body("demandInterviewDetails.contractToHire")
    .notEmpty().withMessage("Contract To Hire is required"),

  body("demandInterviewDetails.requirementResource")
    .notEmpty().withMessage("Requirement Resource is required"),

  body("demandInterviewDetails.nameOfTheSalesPerson")
    .notEmpty().withMessage("nameOfTheSalesPerson  is required"),
];