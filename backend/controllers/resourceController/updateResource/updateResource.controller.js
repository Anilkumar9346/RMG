import mongoose from "mongoose";
import { Resource } from "../../../models/resourceModel/resourceModel.js";
import { Client, DemandSubTechnology, DemandTechnology, Lead, ResourceDemandInfo } from "../../../models/ResourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js";
import { DemandDuration } from "../../../models/ResourceModel/resourceSchemas/demandDurationModel/models/model.js";
import { DemandBudget } from "../../../models/ResourceModel/resourceSchemas/demandBudgetModel/models/model.js";
import { ContractDetails } from "../../../models/resourceModel/resourceSchemas/contractDetailsModel/models/model.js";

export const updateResource = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid resource ID",
      });
    }

    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No data provided for update",
      });
    }

    //find resource
    const data = await Resource.findById(id).select(
      "contractDetailsId demandBudgetId demandDurationId resourceDemandInfoId"
    );

    const updateContractDetails=await ContractDetails.findByIdAndUpdate(data.contractDetailsId,updateData.contractDetailsId)
    if (!updateContractDetails) {
      return res.status(404).json({
        success: false,
        message: " ContractDetails Resource not found",
      });
    }
    const updateDemandBudget=await DemandBudget.findByIdAndUpdate(data.demandBudgetId,updateData.demandBudgetId)
    if (!updateDemandBudget) {
      return res.status(404).json({
        success: false,
        message: "DemandBudget Resource not found",
      });
    }
    const updateDemandDuration=await DemandDuration.findByIdAndUpdate(data.demandDurationId,updateData.demandDurationId)
    if (!updateDemandDuration) {
      return res.status(404).json({
        success: false,
        message: "DemandDuration Resource not found",
      });
    }

    const ResourceDemandInfoId=await ResourceDemandInfo.findById(data.resourceDemandInfoId)
    
    const getClient=await Lead.findById(ResourceDemandInfoId.leadId)
    const updateClient=await Client.findByIdAndUpdate(getClient.clientId,updateData.resourceDemandInfoId.leadId.clientId)
    if(!updateClient){
      return res.status(404).json({
        success: false,
        message: "Client Resource not found",
      });
    }
    const updateDemandTech=await DemandTechnology.findByIdAndUpdate(ResourceDemandInfoId.demandTechnology,updateData.resourceDemandInfoId.demandTechnology)
    if(!updateDemandTech){
      return res.status(404).json({
        success: false,
        message: "Client Resource not found",
      });
    }
    const updateDemandSubTech=await DemandSubTechnology.findByIdAndUpdate(ResourceDemandInfoId.demandSubTechnology,updateData.resourceDemandInfoId.demandSubTechnology)
    if(!updateDemandSubTech){
      return res.status(404).json({
        success: false,
        message: "Client Resource not found",
      });
    }
    const updateLead=await Lead.findByIdAndUpdate(ResourceDemandInfoId.leadId,updateData.resourceDemandInfoId.leadId)
    if(!updateLead){
      return res.status(404).json({
        success: false,
        message: "Resource not found",
      });
    }


    const updateResourceDemandInfoId=await ResourceDemandInfo.findByIdAndUpdate(data.resourceDemandInfoId,updateData.resourceDemandInfoId)
    if(!updateResourceDemandInfoId){
      return res.status(404).json({
        success: false,
        message: "ResourceDemandInfo Resource not found",
      });
    }
    const updatedData={...updateData,resourceStatus:'Updated'}
    const updatedResource = await Resource.findByIdAndUpdate(
      id,
      updatedData,
      {
        new: true,
        runValidators: true
      }
    )
      .populate({
        path: "resourceDemandInfoId",
        populate: [
          {
            path: "leadId",
            populate: { path: "clientId" },
          },
          { path: "demandTechnology" },
          { path: "demandSubTechnology" },
        ],
      })
      .populate("contractDetailsId")
      .populate("demandBudgetId")
      .populate("demandDurationId");

    if (!updatedResource) {
      return res.status(404).json({
        success: false,
        message: "Resource not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Resource updated successfully",
      // data: updatedResource,
    });
  } catch (error) {
    console.error("Update resource error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to update resource",
    });
  }
};
