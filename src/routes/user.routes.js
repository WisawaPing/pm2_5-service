import { Router } from "express";
import controller from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";

const router = Router();
router.get("/", auth, controller.findAll);
router.get("/:id", auth, controller.findOne);
router.post("/", controller.create);
router.put("/:id", auth, controller.update);
router.delete("/:id", auth, controller.remove);
router.post("/login", controller.login);

export default router;
