import mongoose from "mongoose";
import { Resource } from "../../../models/resourceModel/resourceModel.js";

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

    const updatedResource = await Resource.findByIdAndUpdate(
      id,
      updateData,
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
      data: updatedResource,
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
