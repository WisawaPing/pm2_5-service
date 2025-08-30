import { Router } from "express";
import auth from "../middleware/auth.js";
import controller from "../controllers/communityType.controller.js";

const router = Router();

router.get("/", auth, controller.getCommunityTypes);
router.get("/:id", auth, controller.getCommunityTypeById);
router.post("/", controller.createCommunityType);
router.put("/:id", controller.updateCommunityType);
router.delete("/:id", controller.deleteCommunityType);

export default router;
