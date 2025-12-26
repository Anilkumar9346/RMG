import express from "express";
//import { addCandidateResume } from "../controllers/candidateResumeController/addCandidateResume.controller.js";
// import { getAllCandidateResumes } from "../controllers/candidateResumeController/getAllCandidateResumes.controller.js";
// import { getSingleCandidateResume } from "../controllers/candidateResumeController/getSingleCandidateResume.controller.js";
// import { deleteCandidateResume } from "../controllers/candidateResumeController/deleteCandidateResume.controller.js";
 import { updateResumeController } from "../controllers/resumeController/updateResume.controller.js";

const router = express.Router();

// router.post("/add-candidate-resume", addCandidateResume);
// router.get("/get-all-candidate-resumes", getAllCandidateResumes);
// router.get("/get-single-candidate-resume/:id", getSingleCandidateResume);
// router.delete("/delete-candidate-resume/:id", deleteCandidateResume);
router.put("/update-candidate-resume/:id", updateResumeController);

export const candidatesResumesRouter = router;  