import { Router } from "express";
import auth from "../middleware/auth.js";
import controller from "../controllers/course.controller.js";

const router = Router();

router.get("/", auth, controller.getCourses);
router.get("/:id", auth, controller.getCourseById);
router.post("/", controller.createCourse);
router.put("/:id", controller.updateCourse);
router.delete("/:id", controller.deleteCourse);

export default router;
