import { Router } from "express";
import auth from "../middleware/auth.js";
import controller from "../controllers/communityType.controller.js";

const router = Router();

router.get("/", controller.getCommunityTypes);
router.get("/:id", controller.getCommunityTypeById);
router.post("/", controller.createCommunityType);
router.put("/:id", controller.updateCommunityType);
router.delete("/:id", controller.deleteCommunityType);

export default router;
