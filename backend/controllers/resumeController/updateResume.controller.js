
import {Resume } from "../../models/resumeModel/models/model.js";
export const updateResumeController = async (req, res) => {
  console.log("Update Resume Controller Called");
  const { candidateStatusTimeline: updatedCandidateStatusTimeline } = req.body;
  try {
    const updateData = req.body;
    console.log("Update Data:", updateData);
    const resumeId = req.params.id;
    const updatedResume = await Resume.findOneAndUpdate(
      { _id: resumeId },
      {candidateStatusTimeline: updatedCandidateStatusTimeline},
      { new: true }
    );

    if (!updatedResume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Resume updated successfully",
      data: updatedResume,
    });
  } catch (error) {
    console.log("Error while updating resume:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};