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
      const companyId = await createdCompany(companyDetails)
      const clientID = await createdClient(clientDetails,companyId?._id)
      const demandTechnologyId = await createdDemandTechnology(resourceDemandInfo?.demandTechnologyName)
      const demandSubTechnologyId = await createdDemandSubTechnology(resourceDemandInfo?.demandSubTechnologyName,demandTechnologyId?._id)
      const resourceDemandInfoId = await createdResourceDemandInfo(resourceDemandInfo,demandTechnologyId,demandSubTechnologyId,clientID)
      const contractDetailsId = await createdContractDetails(contractDetails)
      const demandBudgetId = await createdDemandBudget(demandBudgetInfo)
      const demandDurationId = await createdDemandDuration(demandDurationInfo)

      const resource = await createdResource(resourceDemandInfoId,contractDetailsId,demandBudgetId,demandDurationId,demandJobDetails,demandInterviewDetails)
      console.log(resource)
  return res.json({message : "Resource Added Successfully"})
} catch (error) {
  return res.json(
    { messsage: "Adding Resource Failed ", error: error.message }
  );
}};

//company created
const createdCompany=async(obj)=>{
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
const createdClient=async(obj,companyId)=>{
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
const createdDemandTechnology=async(obj)=>{
  try {
    // demand tech Details
    const newDemandTechnology = new DemandTechnology({
      demandTechnologyName:obj
    });

    // Save to MongoDB
    const savedNewDemandTechnology = await newDemandTechnology.save();

    return savedNewDemandTechnology;
  } catch (error) {
    console.log(error)
  }
}

//demand sub tech created
const createdDemandSubTechnology=async(obj,id)=>{
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
const createdResourceDemandInfo=async(obj,demandTechnology,demandSubTechnology,clientId)=>{
  try {
    // resourceDemandInfoDetails
    const newResourceDemandInfo = new ResourceDemandInfo({
      demandTechnology,
      demandSubTechnology,
      clientId,
      ...obj
      // engagement:obj.engagement,
      // demandLevel:obj.demandLevel,
      // noOfResource:obj.noOfResource,
      // demandCategory:obj.demandCategory,
    });

    // Save to MongoDB
    const savedNewresourceDemandInfo = await newResourceDemandInfo.save();

    return savedNewresourceDemandInfo;
  } catch (error) {
    console.log(error)
  }
}


//contractDetails created
const createdContractDetails=async(obj)=>{
  try {
    // generate a random id
    const contractDetailsId=generateRandomId(obj.clientNeed)
    
    // ContractDetails Details
    const newContractDetails = new ContractDetails({
      ...obj,
      contractDetailsId
    });

    // Save to MongoDB
    const savedNewContractDetails = await newContractDetails.save();

    return savedNewContractDetails;
  } catch (error) {
    console.log(error)
  }
}


//demandBudget created
const createdDemandBudget=async(obj)=>{
  try {
    // generate a random id
    const demandBudgetId=generateRandomId(obj.budgetType)
    
    // demandBudget Details
    const newDemandBudget = new DemandBudget({
      ...obj,
      demandBudgetId
    });

    // Save to MongoDB
    const savedNewDemandBudget = await newDemandBudget.save();

    return savedNewDemandBudget;
  } catch (error) {
    console.log(error)
  }
}


//demandDuration created
const createdDemandDuration=async(obj)=>{
  try {
    // generate a random id
    const demandDurationId=generateRandomId('DEM')
    
    // demandDuration Details
    const newDemandDuration = new DemandDuration({
      ...obj,
      demandDurationId
    });

    // Save to MongoDB
    const savedNewDemandDuration = await newDemandDuration.save();

    return savedNewDemandDuration;
  } catch (error) {
    console.log(error)
  }
}




//resource created
const createdResource=async(resourceDemandInfoId,contractDetailsId,demandBudgetId,demandDurationId,demandJobDetails,demandInterviewDetails)=>{
  try {
    // generate a random id
    const resourceId=generateRandomId('RES')
    
    // resource Details
    const newResource = new Resource({
      resourceDemandInfoId,
      contractDetailsId,
      demandBudgetId,
      demandDurationId,
      resourceId,
      ...demandJobDetails,
      ...demandInterviewDetails
    });

    // Save to MongoDB
    const savedNewResource = await newResource.save();

    return savedNewResource;
  } catch (error) {
    console.log(error)
  }
}







const generateRandomId = (data) => {
  const now = new Date();

  // dataPart (first 3 letters)
  const dataPart = data
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

  return `${dataPart}${day}${month}${year}${randomAlpha}${hours}${minutes}`;
};





