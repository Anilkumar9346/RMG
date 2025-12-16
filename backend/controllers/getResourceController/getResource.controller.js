import { Resource } from "../../models/resourceModel/resourceModel.js";

export const getAllResources = async (req, res) => {
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
  .populate("demandDurationId");


    res.status(200).json({
      success: true,
      count: resources.length,
      data: resources,
    });
  } catch (error) {
    console.error("Error fetching resources:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch resources",
    });
  }
};
