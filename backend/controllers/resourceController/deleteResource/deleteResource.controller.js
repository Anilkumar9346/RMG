import { Resource } from "../../../models/resourceModel/resourceModel.js";
import mongoose from "mongoose";

export const deleteSingleResources = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid resource ID",
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



export const deleteMultipleResources = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide an array of resource IDs",
      });
    }

    const validIds = ids.filter(id => mongoose.Types.ObjectId.isValid(id));

    if (validIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid resource IDs provided",
      });
    }

    const result = await Resource.deleteMany({
      _id: { $in: validIds },
    });

    return res.status(200).json({
      success: true,
      message: "Resources deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("Delete multiple resources error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete resources",
    });
  }
};