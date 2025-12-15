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

        const companyId=await companyCreated(companyDetails)
        const clientID=await clientCreated(clientDetails,companyId?._id)


        const demandTechnologyId=await demandTechnologyCreated(resourceDemandInfo?.demandTechnologyName)
        const demandSubTechnologyId=await demandSubTechnologyCreated(resourceDemandInfo?.demandSubTechnologyName,demandTechnologyId?._id)


        const resourceDemandInfoID=await resourceDemandInfoCreated(resourceDemandInfo,demandTechnologyId,demandSubTechnologyId,clientID)


    // Sub Technology
    // const newDemandSubTechnology = new DemandSubTechnology({
    //   demandSubTechnologyName,
    //   uniqueId,
    //   technologyParentId: newDemandTechnology._id,
    // });

    // Contract Details
    // const newContractDetails = new ContractDetails({
    //   uniqueId: "abc",
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
    // });

    // // Demand Duration
    // const newDemandDuration = new DemandDuration({
    //   demandStartDate,
    //   demandEndDate,
    //   tentativeDuration,
    //   demandDurationNote,
    //   uniqueId,
    // });

    // // Budget
    // const newDemandBudget = new DemandBudget({
    //   uniqueId,
    //   budgetType,
    //   billingStartDate,
    //   currency,
    //   demandBudgetNote,
    //   budget,
    //   profitMargin,
    //   payoutType,
    // });

    

    // Resource Demand Info
    // const NewResourceDemandInfo = new ResourceDemandInfo({
    //   demandCategory,
    //   noOfResource,
    //   demandLevel,
    //   engagement,
    //   demandSubTechnologyName: newDemandTechnology._id,
    //   demandSubTechnology: newDemandSubTechnology._id,
    //   demandType,
    //   companyId: NewCompanyDetail._id,
    //   uniqueId: "abc",
    // });


    // // If Everythig is Good then 

    return res.json({message : "Resource Added Successfully"})

  } catch (error) {
    return res.json(
      { messsage: "Adding Resource Failed ", error: error.message }
    );
  }
};

//company created
const companyCreated=async(obj)=>{
  try {
    // generate a random id
    const companyId=generateRandomId(obj.companyName)
    // Company Details
    const newCompanyDetail = new CompanyDetail({
      ...obj,
      companyId
    });

    // Save to MongoDB
    const savedCompany = await newCompanyDetail.save();

    return savedCompany;
  } catch (error) {
    console.log(error)
  }
}

//client created
const clientCreated=async(obj,companyId)=>{
  try {
    // generate a random id
    const clientId=generateRandomId(obj.clientName)
    // client Details
    const newClientDetail = new Client({
      ...obj,
      companyId,
      clientId
    });

    // Save to MongoDB
    const savedClient = await newClientDetail.save();

    return savedClient;
  } catch (error) {
    console.log(error)
  }
}

//demand tech created
const demandTechnologyCreated=async(obj)=>{
  try {
    // demand tech Details
    const newDemandTechnology = new DemandTechnology({
      demandSubTechnologyName:obj
    });

    // Save to MongoDB
    const savedNewDemandTechnology = await newDemandTechnology.save();

    return savedNewDemandTechnology;
  } catch (error) {
    console.log(error)
  }
}

//demand sub tech created
const demandSubTechnologyCreated=async(obj,id)=>{
  try {
    // demand sub tech Details
    const newDemandSubTechnology = new DemandSubTechnology({
      demandSubTechnologyName:obj,
      demandTechnologyId:id
    });

    // Save to MongoDB
    const savedNewDemandSubTechnology = await newDemandSubTechnology.save();

    return savedNewDemandSubTechnology;
  } catch (error) {
    console.log(error)
  }
}


//resourceDemandInfo created
const resourceDemandInfoCreated=async(obj,demandTechnology,demandSubTechnology,clientId)=>{
  try {
    // resourceDemandInfoDetails
    const newResourceDemandInfo = new ResourceDemandInfo({
      demandTechnology,
      demandSubTechnology,
      clientId,
      engagement:obj.engagement,
      demandLevel:obj.demandLevel,
      noOfResource:obj.noOfResource,
      demandCategory:obj.demandCategory,
    });

    // Save to MongoDB
    const savedNewresourceDemandInfo = await newResourceDemandInfo.save();

    return savedNewresourceDemandInfo;
  } catch (error) {
    console.log(error)
  }
}

const generateRandomId = (companyName) => {
  const now = new Date();

  // Company part (first 3 letters)
  const companyPart = companyName
    .replace(/\s+/g, "")
    .toUpperCase()
    .slice(0, 3)
    .padEnd(3, "X");

  // Date parts
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  // Time (HHMM)
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // Random alphabet
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomAlpha =
    alphabet[Math.floor(Math.random() * alphabet.length)];

  return `${companyPart}${day}${month}${year}${randomAlpha}${hours}${minutes}`;
};





