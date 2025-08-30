import express from "express";
import auth from "../middleware/auth.js";
import communityController from "../controllers/communityOverview.controller.js";

const router = express.Router();

router.get("/", auth, communityController.getCommunityOverview);
router.put("/", auth, communityController.updateCommunityOverview);

export default router;
