import mongoose from "mongoose";
import { Resource } from "../../../models/resourceModel/resourceModel.js";
import { Comment } from "../../../models/commentModel/models/models.js";

export const addComment = async (req, res) => {
  try {
    const { resourceModelId, userId, commentNote } = req.body;

    if (!resourceModelId || !userId || !commentNote) {
      return res.status(400).json({
        success: false,
        message: "resourceModelId, userId and commentNote are required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(resourceModelId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid resource ID",
      });
    }

    const resourceExists = await Resource.findById(resourceModelId);
    if (!resourceExists) {
      return res.status(404).json({
        success: false,
        message: "Resource not found",
      });
    }

    const comment = await Comment.create({
      resourceModelId,
      userId,
      commentNote,
    });

    return res.status(201).json({
      success: true,
      message: "Comment added successfully",
      data: comment,
    });
  } catch (error) {
    console.error("Add comment error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to add comment",
    });
  }
};
