import express from "express"

import { dashboardStatsController, getAggregatedData , getFlowChartData } from "../controllers/aggregationController/getAggregation.controller.js";

const router = express.Router();

router.get("/get-created-on-status-table-data", getAggregatedData);

router.get("/get-dashboard-stats", dashboardStatsController);

router.get("/get-flow-chart-data", getFlowChartData);

router.get("/resource/source-distribution", getAggregatedData);

router.get("/resource/status-distribution", getAggregatedData);

export const aggregationsRouter = router;    