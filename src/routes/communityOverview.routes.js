import express from "express";
import communityController from "../controllers/communityOverview.controller.js";

const router = express.Router();

router.get("/", communityController.getCommunityOverview);
router.put("/", communityController.updateCommunityOverview);

export default router;
