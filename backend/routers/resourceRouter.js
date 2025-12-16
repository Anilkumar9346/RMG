import express from "express"

import { addResourceValidator } from "../validators/resource.validator.js";
import { validate } from "../middlewares/validate.middleware.js";
import { addResourceController } from "../controllers/addResourceControllers/addResource.controller.js";
import { getAllResources } from "../controllers/getResourceController/getResource.controller.js";

const router = express.Router();

router.post("/add-resource", addResourceValidator, validate, addResourceController);
router.get("/get-all-resource",getAllResources);

// resourceRouter.post('/api/resourceRouter',);

export const resourceRouter = router;