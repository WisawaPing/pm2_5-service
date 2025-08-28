"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _major = require("../controllers/major.controller");

var _major2 = _interopRequireDefault(_major);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _major2.default.findAll);
router.get("/:id", _major2.default.findOne);
router.post("/", _major2.default.create);
router.put("/:id", _major2.default.update);
router.delete("/:id", _major2.default.remove);

router.get("/form3/:courseId", _major2.default.getCourseIdForm3);
router.put("/form3/:courseId", _major2.default.updateCourseIdForm3);
router.delete("/form3/:courseId", _major2.default.deleteCourseIdForm3);

router.post("/form3", _major2.default.form3);

exports.default = router;
//# sourceMappingURL=major.routes.js.map