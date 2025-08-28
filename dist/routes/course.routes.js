"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _course = require("../controllers/course.controller");

var _course2 = _interopRequireDefault(_course);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _course2.default.findAll);
router.put("/updateIndex", _course2.default.updateIndex);
router.get("/:id", _course2.default.findOne);
router.post("/", _course2.default.create);

router.delete("/:id", _course2.default.remove);

router.put("/form6", _course2.default.updateForm6);
router.post("/form6", _course2.default.createForm6);
router.get("/form6/:id", _course2.default.findOneForm6);
router.put("/:id", _course2.default.update);
exports.default = router;
//# sourceMappingURL=course.routes.js.map