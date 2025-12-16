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

const generateRandomId = (data) => {
  const now = new Date();

  const dataPart = data
    .replace(/\s+/g, "")
    .toUpperCase()
    .slice(0, 3)
    .padEnd(3, "X");

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomAlpha =
    alphabet[Math.floor(Math.random() * alphabet.length)];

  return `${dataPart}${day}${month}${year}${randomAlpha}${hours}${minutes}`;
};

// Company
const createCompany = async (companyData) => {
  try {
    const existingCompany = await CompanyDetail.findOne({
      companyName: companyData.companyName,
    });

    if (existingCompany) {
      return existingCompany;
    }

    const companyId = generateRandomId(companyData.companyName);

    const companyDoc = new CompanyDetail({
      ...companyData,
      companyId,
    });

    return await companyDoc.save();
  } catch (error) {
    console.error("Error creating company:", error);
    throw error;
  }
};

// Client 
const createClient = async (clientData, companyId) => {
  try {
    const existingClient = await Client.findOne({
      clientName: clientData.clientName,
    });

    if (existingClient) {
      return existingClient;
    }

    const clientId = generateRandomId(clientData.clientName);

    const clientDoc = new Client({
      ...clientData,
      companyId,
      clientId,
    });

    return await clientDoc.save();
  } catch (error) {
    console.log(error);
  }
};

// Demand Technology 
const createDemandTechnology = async (technologyName) => {
  try {
    const existingDemandTech = await DemandTechnology.findOne({
      demandTechnologyName: technologyName,
    });

    if (existingDemandTech) {
      return existingDemandTech;
    }
    const demandTechnologyDoc = new DemandTechnology({
      demandTechnologyName: technologyName,
    });

    return await demandTechnologyDoc.save();
  } catch (error) {
    console.log(error);
  }
};

// Demand Sub Technology 
const createDemandSubTechnology = async ( subTechnologyName, demandTechnologyId ) => {
  try {
    const existingDemandSubTech = await DemandSubTechnology.findOne({
      demandSubTechnologyName: subTechnologyName,
    });

    if (existingDemandSubTech) {
      return existingDemandSubTech;
    }
    const demandSubTechnologyDoc = new DemandSubTechnology({
      demandSubTechnologyName: subTechnologyName,
      demandTechnologyId,
    });

    return await demandSubTechnologyDoc.save();
  } catch (error) {
    console.log(error);
  }
};

// Resource Demand Info 
const createResourceDemandInfo = async ( resourceDemandData, demandTechnology, demandSubTechnology, client ) => {
  try {
    const resourceInfoId = generateRandomId("RIN");

    const resourceDemandInfoDoc = new ResourceDemandInfo({
      ...resourceDemandData,
      demandTechnology,
      demandSubTechnology,
      clientId: client,
      resourceInfoId,
    });

    return await resourceDemandInfoDoc.save();
  } catch (error) {
    console.log(error);
  }
};

// Contract Details 
const createContractDetails = async (contractData) => {
  try {
    const contractDetailsId = generateRandomId(contractData.clientNeed);

    const contractDetailsDoc = new ContractDetails({
      ...contractData,
      contractDetailsId,
    });

    return await contractDetailsDoc.save();
  } catch (error) {
    console.log(error);
  }
};

// Demand Budget 
const createDemandBudget = async (budgetData) => {
  try {
    const demandBudgetId = generateRandomId(budgetData.budgetType);

    const demandBudgetDoc = new DemandBudget({
      ...budgetData,
      demandBudgetId,
    });

    return await demandBudgetDoc.save();
  } catch (error) {
    console.log(error);
  }
};

// Demand Duration 
const createDemandDuration = async (durationData) => {
  try {
    const demandDurationId = generateRandomId("DEM");

    const demandDurationDoc = new DemandDuration({
      ...durationData,
      demandDurationId,
    });

    return await demandDurationDoc.save();
  } catch (error) {
    console.log(error);
  }
};

// Resource 
const createResource = async (
  resourceDemandInfo,
  contractDetails,
  demandBudget,
  demandDuration,
  jobDetails,
  interviewDetails
) => {
  try {
    const resourceId = generateRandomId("RES");

    const resourceDoc = new Resource({
      resourceDemandInfoId: resourceDemandInfo,
      contractDetailsId: contractDetails,
      demandBudgetId: demandBudget,
      demandDurationId: demandDuration,
      resourceId,
      ...jobDetails,
      ...interviewDetails,
    });

    return await resourceDoc.save();
  } catch (error) {
    console.log(error);
  }
};

// Controller 
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
      clientDetails,
    } = req.body;

    const company = await createCompany(companyDetails);
    const client = await createClient(clientDetails, company?._id);

    const demandTechnology = await createDemandTechnology(
      resourceDemandInfo?.demandTechnologyName
    );

    const demandSubTechnology = await createDemandSubTechnology(
      resourceDemandInfo?.demandSubTechnologyName,
      demandTechnology?._id
    );

    const resourceDemandInfoDoc = await createResourceDemandInfo(
      resourceDemandInfo,
      demandTechnology,
      demandSubTechnology,
      client
    );

    const contractDetailsDoc = await createContractDetails(contractDetails);
    const demandBudgetDoc = await createDemandBudget(demandBudgetInfo);
    const demandDurationDoc = await createDemandDuration(demandDurationInfo);

    const resource = await createResource(
      resourceDemandInfoDoc,
      contractDetailsDoc,
      demandBudgetDoc,
      demandDurationDoc,
      demandJobDetails,
      demandInterviewDetails
    );

    console.log(resource);

    return res.json({ message: "Resource Added Successfully" });
  } catch (error) {
    return res.json({
      message: "Adding Resource Failed",
      error: error.message,
    });
  }
};
