import db from "../models/index.js";

const Course = db.Course;

// ฟังก์ชันช่วย parse lessons ให้เป็น array
const parseLessons = (lessons) => {
  if (!lessons) return [];
  if (typeof lessons === "string") {
    try {
      return JSON.parse(lessons);
    } catch (err) {
      return [];
    }
  }
  return lessons;
};

export default {
  // ดึงรายการหลักสูตรทั้งหมด
  getCourses: async (req, res) => {
    try {
      const list = await Course.findAll();

      const formattedList = list.map((course) => {
        const courseJson = course.toJSON();
        courseJson.lessons = parseLessons(courseJson.lessons);
        return courseJson;
      });

      res.json({ response_status: "OK", data: formattedList });
    } catch (err) {
      console.error(err);
      res.status(500).json({ response_status: "ERROR", message: err.message });
    }
  },

  // ดึงข้อมูลหลักสูตรตาม id
  getCourseById: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await Course.findByPk(id);
      if (!course) {
        return res
          .status(404)
          .json({ response_status: "ERROR", message: "ไม่พบข้อมูล" });
      }

      const courseJson = course.toJSON();
      courseJson.lessons = parseLessons(courseJson.lessons);

      res.json({ response_status: "OK", data: courseJson });
    } catch (err) {
      console.error(err);
      res.status(500).json({ response_status: "ERROR", message: err.message });
    }
  },

  // สร้างหลักสูตรใหม่
  createCourse: async (req, res) => {
    try {
      let { lessons, ...rest } = req.body;
      lessons = parseLessons(lessons);

      const newCourse = await Course.create({
        ...rest,
        lessons,
      });

      res.json({ response_status: "OK", data: newCourse });
    } catch (err) {
      console.error(err);
      res.status(500).json({ response_status: "ERROR", message: err.message });
    }
  },

  // อัปเดตหลักสูตร
  updateCourse: async (req, res) => {
    try {
      const { id } = req.params;
      let { lessons, ...rest } = req.body;

      const course = await Course.findByPk(id);
      if (!course)
        return res
          .status(404)
          .json({ response_status: "ERROR", message: "ไม่พบข้อมูล" });

      lessons = parseLessons(lessons);

      await course.update({ ...rest, lessons });

      const updatedCourse = course.toJSON();
      updatedCourse.lessons = parseLessons(updatedCourse.lessons);

      res.json({ response_status: "OK", data: updatedCourse });
    } catch (err) {
      console.error(err);
      res.status(500).json({ response_status: "ERROR", message: err.message });
    }
  },

  // ลบหลักสูตร
  deleteCourse: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await Course.findByPk(id);
      if (!course) {
        return res
          .status(404)
          .json({ response_status: "ERROR", message: "ไม่พบข้อมูล" });
      }
      await course.destroy();
      res.json({ response_status: "OK", message: "ลบข้อมูลเรียบร้อย" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ response_status: "ERROR", message: err.message });
    }
  },
};
