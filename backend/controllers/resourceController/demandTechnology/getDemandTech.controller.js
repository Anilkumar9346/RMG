import { DemandSubTechnology, DemandTechnology } from "../../../models/resourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js";

export const getDemandTech = async (req, res) => {
  try {
    const techList = await DemandTechnology.find().sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Demand technologies fetched successfully",
      count: techList.length,
      data: techList
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch demand technologies",
      error: error.message
    });
  }
};


export const getDemandSubTech = async (req, res) => {
  try {
    const { techId } = req.params;
    

    if (!techId) {
      return res.status(400).json({ message: "techId is required" });
    }

    const techExists = await DemandTechnology.findById({_id:techId});
    if (!techExists) {
      return res.status(404).json({ message: "Demand tech not found" });
    }
    const subTechList = await DemandSubTechnology.find({
      demandTechnologyId: techId
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Demand sub-tech fetched successfully",
      count: subTechList.length,
      data: subTechList
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch demand sub-tech",
      error: error.message
    });
  }
};
