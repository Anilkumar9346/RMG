import { Resource } from "../../../models/resourceModel/resourceModel.js";
import mongoose from "mongoose";

export const getAllResources = async (req, res) => {
  console.log("Get All Resources Controller Called");
  try {
    const resources = await Resource.find()
      .populate({
        path: "resourceDemandInfoId",
        populate: [
          {
            path: "leadId",
            populate: {
              path: "clientId",
            },
          },
          {
            path: "demandTechnology",
          },
          {
            path: "demandSubTechnology",
          },
        ],
      })
      .populate("contractDetailsId")
      .populate("demandBudgetId")
      .populate("demandDurationId")
      .populate("resumesOfThisResource");

    if (!resources || resources.length === 0) {
      return res.status(204).send();
    }

    return res.status(200).json({
      success: true,
      count: resources.length,
      data: resources,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch resources",
    });
  }
};

export const getSingleResources = async (req, res) => {
  try {
    const {id} =req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid resource ID",
      });
    }

    const resources = await Resource.findOne({
      _id:id
    })
      .populate({
        path: "resourceDemandInfoId",
        populate: [
          {
            path: "leadId",
            populate: {
              path: "clientId",
            },
          },
          {
            path: "demandTechnology",
          },
          {
            path: "demandSubTechnology",
          },
        ],
      })
      .populate("contractDetailsId")
      .populate("demandBudgetId")
      .populate("demandDurationId")
      .populate("resumesOfThisResource");

    if (!resources || resources.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Resource not found",
      });
    }

    return res.status(200).json({
      success: true,
      count: resources.length,
      data: resources,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch resources",
    });
  }
};
