"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _priceCourse = require("../controllers/priceCourse.controller");

var _priceCourse2 = _interopRequireDefault(_priceCourse);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.put("/form5", _priceCourse2.default.updateForm5);

router.get("/", _priceCourse2.default.findAll);
router.get("/form5/:courseId", _priceCourse2.default.findAllForm5);
router.get("/:id", _priceCourse2.default.findOne);
router.post("/", _priceCourse2.default.create);
router.post("/form5", _priceCourse2.default.createForm5);

router.put("/:id", _priceCourse2.default.update);
router.delete("/:id", _priceCourse2.default.remove);
router.delete("/form5/:courseId", _priceCourse2.default.deleteForm5);

exports.default = router;
//# sourceMappingURL=priceCourse.routes.js.map