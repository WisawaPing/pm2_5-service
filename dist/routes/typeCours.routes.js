"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeCourse = require("../controllers/typeCourse.controller");

var _typeCourse2 = _interopRequireDefault(_typeCourse);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _typeCourse2.default.findAll);
router.get("/:id", _typeCourse2.default.findOne);
router.post("/", _typeCourse2.default.create);
router.put("/:id", _typeCourse2.default.update);
router.delete("/:id", _typeCourse2.default.remove);

exports.default = router;
//# sourceMappingURL=typeCours.routes.js.map