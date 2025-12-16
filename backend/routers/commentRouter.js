import express from "express"
import { addComment } from "../controllers/commentController/addComment/addComment.controller.js";
import { getAllComment } from "../controllers/commentController/getComment/getComment.controller.js";
import { deleteComment } from "../controllers/commentController/deleteComment/deleteComment.controller.js";


const router = express.Router();

router.post("/addComment", addComment);
router.get("/get-all-Comment/:resourceId", getAllComment);
router.get("/get-all-Comment", getAllComment);
router.delete("/delete-Comment/:id", deleteComment);

export const commentRouter = router;