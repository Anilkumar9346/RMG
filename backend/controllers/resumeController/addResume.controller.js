import { Resume } from "../../models/resumeModel/models/model.js";
import { Resource } from "../../models/ResourceModel/resourceModel.js";

export const addResume = async (req, res) => {
  console.log("Add Resume Called");
  console.log("Request :", req);
  try {
    const  resumeData  = req.body;
    console.log("Resume Data Received:", resumeData);
    const resumeDoc = new Resume({
      ...resumeData,
      resourceModelId: resumeData.resourceModelId,
    });
    const resumeSavedDoc =  await resumeDoc.save();
    console.log("Resume saved successfully:", resumeSavedDoc);

    // Update the Resource document to include this resume
    
    const resourceModelId = resumeData.resourceModelId; // Assuming resumeData contains resourceId
    const resourceDoc = await Resource.findById(resourceModelId);
    console.log("Resource Document Found:", resourceDoc);
    if (resourceDoc) {
      resourceDoc.resumesOfThisResource.push(resumeSavedDoc._id);
      await resourceDoc.save();
      console.log("Resource updated with new resume:", resourceDoc);
    } else {
      console.log("Resouce Doc" , resourceDoc)
      console.log("Resource Not Found To Add Resume:", resourceModelId);
    }

    return res.status(201).json({
      success: true,
      message: "Resume added successfully",
      data: resumeSavedDoc,
    });


  } catch (error) {
    console.log("Error While adding resume:", error);
  }
};