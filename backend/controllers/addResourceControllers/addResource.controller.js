import {Resource} from '../../models/resourceModel/resourceModel.js'

import {ResourceDemandInfo} from  '../../models/resourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js'
import {DemandTechnology} from  '../../models/resourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js'
import {DemandSubTechnology} from  '../../models/resourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js'
import {CompanyDetail} from '../../models/resourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js'
import {Client} from '../../models/resourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js'

//import {WorkingLocation} from '../../models/resourceModel/resourceSchemas/contractDetailsModel/models/model.js'
import {ContractDetails} from '../../models/resourceModel/resourceSchemas/contractDetailsModel/models/model.js'

import {DemandDuration} from '../../models/resourceModel/resourceSchemas/demandDurationModel/models/model.js'

import {DemandBudget} from '../../models/resourceModel/resourceSchemas/demandBudgetModel/models/model.js'

// creating rerource 

export const addResourceController = async (req, res) => {

  try {

  const {
    resourceDemandInfo,
    contractDetails,
    demandJobDetails,
    demandDurationInfo,
    demandBudgetInfo,
    demandInterviewDetails,
    companyDetails,
    clientDetails  
  } = req.body;

  const addResourceObj = {
    "resourceDemandInfo": {
      "demandCategory": "IT",
      "noOfResource": 3,
      "demandLevel": "Senior",
      "engagement": "Full Time",
      "demandTechnologyName": "Node.js",
      "demandSubTechnologyName": "Express.js",
      "demandType": "Contract"
    },

    "contractDetails": {
      "clientNeed": "Immediate",
      "contractType": "Full Time",
      "workingDays": 5,
      "workingTiming": "9AM - 6PM",
      "workingLocation": "Remote"
    },

    "demandJobDetails": {
      "jobDescription": "Looking for an experienced Node.js developer with strong backend skills."
    },

    "demandDurationInfo": {
      "billingStartDate": "2025-01-01",
      "billingEndDate": "2025-06-30",
      "tentativeDuration": "6 Months",
      "demandDurationNote": "Extendable based on performance",
      "uniqueId": "DEM-00123"
    },

    "demandBudgetInfo": {
      "budgetType": "Monthly",
      "demandBudgetBillingStartDate": "2025-01-01",
      "currency": "INR",
      "demandBudgetNote": "Budget is flexible",
      "budget": 150000,
      "profitMargin": 20,
      "payoutType": "Monthly"
    },

    "demandInterviewDetails": {
      "modeOfInterview": "Online",
      "interviewNote": "Technical + HR rounds",
      "budgetStatus": "Approved",
      "techProfile": "Backend Developer",
      "contractToHire": true,
      "paymentConfirmation": true,
      "requirementResource": "Immediate"
    },
    "companyDetails":{
      "companyName":"PayPal",
      "companyLinkedId":"erv679bclwerttewg"
    },
    "clientDetails":{
      "clientName":"Stripe",
      "clientContact":"345678765",
      "experienceLevel":"6 Years"
    }
  }

    // const {
    //   // ResourceDemandInfo
    //   demandCategory,
    //   noOfResource,
    //   demandLevel,
    //   engagement,

    //   // DemandTechnology
    //   demandTechnologyName,
    //   demandSubTechnologyName,
    //   demandType,

    //   // Company Details
    //   companyName,
    //   companyLinkedId,
    //   companyAddress,
    //   CompanyId,

    //   // Client details
    //   companyId,
    //   clientName,
    //   clientContact,
    //   experienceLevel,
    //   clientId,

    //   // Contract details
    //   clientNeed,
    //   contractType,
    //   workingDays,
    //   workingTiming,
    //   workingLocation,
    //   workingMode,
    //   laptopProvide,
    //   BGV,
    //   clientBGV_Verify,
    //   BGVNote,

    //   // Demand duration
    //   demandStartDate,
    //   demandEndDate,
    //   tentativeDuration,
    //   demandDurationNote,
    //   uniqueId,

    //   // Budget Information
    //   budgetType,
    //   billingStartDate,
    //   currency,
    //   demandBudgetNote,
    //   budget,
    //   profitMargin,
    //   payoutType,

    //   // Misc
    //   jobDescription,
    //   modeOfInterview,
    //   interviewNote,
    //   budgetStatus,
    //   techProfile,
    //   contractToHire,
    //   paymentConfirmation,
    //   requirementResource,
    //   nameOfTheSalePersion,
    // } = req.body;


    // Demand Technology
    const newDemandTechnology = new DemandTechnology({
      demandTechnologyName,
      technologyId: "abc",
    });

    // Sub Technology
    const newDemandSubTechnology = new DemandSubTechnology({
      demandSubTechnologyName,
      uniqueId,
      technologyParentId: newDemandTechnology._id,
    });

    // Contract Details
    const newContractDetails = new ContractDetails({
      uniqueId: "abc",
      clientNeed,
      contractType,
      workingDays,
      workingTiming,
      workingLocation,
      workingMode,
      laptopProvide,
      BGV,
      clientBGV_Verify,
      BGVNote,
    });

    // Demand Duration
    const newDemandDuration = new DemandDuration({
      demandStartDate,
      demandEndDate,
      tentativeDuration,
      demandDurationNote,
      uniqueId,
    });

    // Budget
    const newDemandBudget = new DemandBudget({
      uniqueId,
      budgetType,
      billingStartDate,
      currency,
      demandBudgetNote,
      budget,
      profitMargin,
      payoutType,
    });

    // Company Details
    const NewCompanyDetail = new CompanyDetail({
      companyName,
      companyLinkedId,
      companyAddress,
      CompanyId,
    });

    // Client
    const NewClient = new Client({
      companyId,
      clientName,
      clientContact,
      experienceLevel,
      clientId,
    });

    // Resource Demand Info
    const NewResourceDemandInfo = new ResourceDemandInfo({
      demandCategory,
      noOfResource,
      demandLevel,
      engagement,
      demandSubTechnologyName: newDemandTechnology._id,
      demandSubTechnology: newDemandSubTechnology._id,
      demandType,
      companyId: NewCompanyDetail._id,
      uniqueId: "abc",
    });


    // If Everythig is Good then 

    return res.json({message : "Resource Added Successfully"})

  } catch (error) {
    return res.json(
      { messsage: "Adding Resource Failed ", error: error.message }
    );
  }
};





