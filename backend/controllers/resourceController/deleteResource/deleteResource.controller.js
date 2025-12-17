import { Resource } from "../../../models/resourceModel/resourceModel.js";
import mongoose from "mongoose";
import { ContractDetails } from "../../../models/resourceModel/resourceSchemas/contractDetailsModel/models/model.js";
import { ResourceDemandInfo } from "../../../models/ResourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js";
import { DemandDuration } from "../../../models/ResourceModel/resourceSchemas/demandDurationModel/models/model.js";
import { DemandBudget } from "../../../models/ResourceModel/resourceSchemas/demandBudgetModel/models/model.js";
// import { Client, Lead } from "../../../models/ResourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js";

export const deleteSingleResources = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid resource ID",
      });
    }

    const data = await Resource.findById(id).select(
      "contractDetailsId demandBudgetId demandDurationId resourceDemandInfoId"
    );

    const deleteContractDetails=await ContractDetails.findByIdAndDelete(data.contractDetailsId)
    if (!deleteContractDetails) {
      return res.status(404).json({
        success: false,
        message: " ContractDetails Resource not found",
      });
    }
    const deleteDemandBudget=await DemandBudget.findByIdAndDelete(data.demandBudgetId)
    if (!deleteDemandBudget) {
      return res.status(404).json({
        success: false,
        message: "DemandBudget Resource not found",
      });
    }
    const deleteDemandDuration=await DemandDuration.findByIdAndDelete(data.demandDurationId)
    if (!deleteDemandDuration) {
      return res.status(404).json({
        success: false,
        message: "DemandDuration Resource not found",
      });
    }
    const deleteResourceDemandInfoId=await ResourceDemandInfo.findByIdAndDelete(data.resourceDemandInfoId)
    if(!deleteResourceDemandInfoId){
      return res.status(404).json({
        success: false,
        message: "ResourceDemandInfo Resource not found",
      });
    }

    const deletedResource = await Resource.findByIdAndDelete(id);

    if (!deletedResource) {
      return res.status(404).json({
        success: false,
        message: "Resource not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Resource deleted successfully",
    });
  } catch (error) {
    console.error("Delete resource error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete resource",
    });
  }
};



// export const deleteMultipleResources = async (req, res) => {
//   try {
//     const { ids } = req.body;

//     if (!ids || !Array.isArray(ids) || ids.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Please provide an array of resource IDs",
//       });
//     }

//     const validIds = ids.filter(id => mongoose.Types.ObjectId.isValid(id));

//     if (validIds.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "No valid resource IDs provided",
//       });
//     }

//     const result = await Resource.deleteMany({
//       _id: { $in: validIds },
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Resources deleted successfully",
//       deletedCount: result.deletedCount,
//     });
//   } catch (error) {
//     console.error("Delete multiple resources error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete resources",
//     });
//   }
// };