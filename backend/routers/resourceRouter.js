import express from "express"

import { addResourceValidator } from "../validators/resource.validator.js";
import { validate } from "../middlewares/validate.middleware.js";
import { addResourceController } from "../controllers/resourceController/addResource/addResource.controller.js";
import { getAllResources, getSingleResources } from "../controllers/resourceController/getResource/getResource.controller.js";
import { deleteSingleResources } from "../controllers/resourceController/deleteResource/deleteResource.controller.js";
import { updateResource } from "../controllers/resourceController/updateResource/updateResource.controller.js";

const router = express.Router();

router.post("/add-resource", addResourceValidator, validate, addResourceController);

router.get("/get-all-resource",getAllResources);
router.get("/get-single-resource/:id",getSingleResources);

router.delete("/delete-single-resource/:id",deleteSingleResources);

router.put("/update-resource/:id", updateResource);


export const resourceRouter = router;