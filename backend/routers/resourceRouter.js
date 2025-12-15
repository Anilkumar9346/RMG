import express from "express"

import { addResourceValidator } from "../validators/resource.validator";
import { validate } from "../middlewares/validate.middleware";
import { addResourceController } from "../controllers/addResourceControllers/addResource.Controller";

const router = express.Router();

// router.post("/add-resource", addResourceValidator, validate, addResourceController);

// resourceRouter.post('/api/resourceRouter',);

export const resourceRouter = router;