import {Resource} from '../../models/ResourceModel/resourceModel.js'

import {ResourceDemandInfo} from  '../../models/ResourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js'
import {DemandTechnology} from  '../../models/ResourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js'
import {DemandSubTechnology} from  '../../models/ResourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js'
import {CompanyDetail} from '../../models/ResourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js'
import {Client} from '../../models/ResourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js'

//import {WorkingLocation} from '../../models/resourceModel/resourceSchemas/contractDetailsModel/models/model.js'
import {ContractDetails} from '../../models/ResourceModel/resourceSchemas/contractDetailsModel/models/model.js'

import {DemandDuration} from '../../models/ResourceModel/resourceSchemas/demandDurationModel/models/model.js'

import {DemandBudget} from '../../models/ResourceModel/resourceSchemas/demandBudgetModel/models/model.js'

// creating rerource 

export const addResourceController = async (req, res) => {

  try {
    const {
      // ResourceDemandInfo
      demandCategory,
      noOfResource,
      demandLevel,
      engagement,

      // DemandTechnology
      demandTechnologyName,
      demandSubTechnologyName,
      demandType,

      // Company Details
      companyName,
      companyLinkedId,
      companyAddress,
      CompanyId,

      // Client details
      companyId,
      clientName,
      clientContact,
      experienceLevel,
      clientId,

      // Contract details
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

      // Demand duration
      demandStartDate,
      demandEndDate,
      tentativeDuration,
      demandDurationNote,
      uniqueId,

      // Budget Information
      budgetType,
      billingStartDate,
      currency,
      demandBudgetNote,
      budget,
      profitMargin,
      payoutType,

      // Misc
      jobDescription,
      modeOfInterview,
      interviewNote,
      budgetStatus,
      techProfile,
      contractToHire,
      paymentConfirmation,
      requirementResource,
      nameOfTheSalePersion,
    } = req.body;

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





