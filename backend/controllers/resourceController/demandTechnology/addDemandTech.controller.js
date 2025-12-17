import { DemandSubTechnology, DemandTechnology } from "../../../models/resourceModel/resourceSchemas/resourceDemandInfoModel/models/model.js";

export const addDemandTech = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Technology name is required" });
    }

    const tech = await DemandTechnology.create({
      demandTechnologyName:name
    });

    return res.status(201).json({
      message: "Demand tech created successfully",
      techId: tech._id
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create demand tech",
      error: error.message
    });
  }
};

export const addDemandSubTech = async (req, res) => {
  try {
    const { techId, name } = req.body;

    if (!techId) {
      return res.status(400).json({
        message: "techId required"
      });
    }
    if (!name) {
      return res.status(400).json({
        message: "sub-tech name is required"
      });
    }

    const techExists = await DemandTechnology.findById(techId);
    if (!techExists) {
      return res.status(404).json({ message: "Demand tech not found" });
    }

    const subTech = await DemandSubTechnology.create({
      demandTechnologyId:techId,
      demandSubTechnologyName:name
    });

    return res.status(201).json({
      message: "Demand sub-tech created successfully",
      subTechId: subTech._id
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create demand sub-tech",
      error: error.message
    });
  }
};
