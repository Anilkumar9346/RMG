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

const getAllDataFromFrotend = async (req,res)=>{
   try{

   const {
    // for this is ResourceDemandInfo 
      demandCategory,
      noOfResource,
      demandLevel,
      engagement,
     // for demandTachnology 
      demandTechnologyName,
      //technologyId
      demandSubTechnologyName,
     // uniqueId,
     //
     demandType,
     //company details
     companyName,
     companyLinkedId,
     companyAddress,
     CompanyId,
 
     // client details
    companyId,
    clientName,
    clientContact,
    experienceLevel,
    clientId,

     // for cotact details
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

     //for demand duration 
     demandStartDate,
     demandEndDate,
     tentativeDuration,
     demandDurationNote,
     uniqueId,

     // for demand buget 
     //uniqueId
     budgetType,
     billingStartDate,
     currency,
     demandBudgetNote,
     budget,
     profitMargin,
     payoutType,


     jobDescription,
     modeOfInterview,
     interviewNote,
     budgetStatus,
     techProfile,
     contractToHire,
     paymentConfirmation,
     requirementResource,
     nameOfTheSalePersion
    
    } = req.body;
   
     const newDemandTechnology= new DemandTechnology({
          demandTechnologyName,
          technologyId:"abc"
     })

     const newDemandSubTechnology  = DemandSubTechnology({
          demandSubTechnologyName,
          uniqueId,
          technologyParentId:newDemandTechnology._id
     })

     const newContractDetails = new ContractDetails({
     uniqueId:"abc",
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
     })


     const newDemandDuration = new DemandDuration({
           demandStartDate,
          demandEndDate,
          tentativeDuration,
         demandDurationNote,
         uniqueId,
     })

     const newDemandBudget =new DemandBudget({
     uniqueId,
     budgetType,
     billingStartDate,
     currency,
     demandBudgetNote,
     budget,
     profitMargin,
     payoutType,
     })
     
     const NewCompanyDetail =new CompanyDetail({
     companyName,
     companyLinkedId,
     companyAddress,
     CompanyId,
     })
   
     const NewClient = Client({
         companyId,
         clientName,
         clientContact,
         experienceLevel,
        clientId,
     })


     const NewResourceDemandInfo =new ResourceDemandInfo({
      demandCategory,
      noOfResource,
      demandLevel,
      engagement,
      demandSubTechnologyName:newDemandTechnology._id,
      demandSubTechnology:newDemandSubTechnology._id,
      demandType,
     companyId:NewCompanyDetail._id,
     uniqueId:"abc",
    })
  







   }catch(error){
      return res.json([{messsage:"server error", error:error.messsage}])
   }
}




