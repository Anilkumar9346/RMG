import express from "express"

import { dashboardStatsController, getAggregatedData } from "../controllers/aggregationController/getAggregation.controller.js";

const router = express.Router();

router.get("/demand/status-created-on", getAggregatedData);

router.get("/demand/new-requirement", dashboardStatsController);

router.get("/resource/location-distribution", getAggregatedData);

router.get("/resource/source-distribution", getAggregatedData);

router.get("/resource/status-distribution", getAggregatedData);

export const aggregationsRouter = router;    