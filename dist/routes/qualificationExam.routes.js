"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _qualificationExam = require("../controllers/qualificationExam.controller");

var _qualificationExam2 = _interopRequireDefault(_qualificationExam);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _qualificationExam2.default.findAll);
router.get("/:id", _qualificationExam2.default.findOne);
router.post("/", _qualificationExam2.default.create);
router.put("/:id", _qualificationExam2.default.update);
router.delete("/:id", _qualificationExam2.default.remove);

exports.default = router;
//# sourceMappingURL=qualificationExam.routes.js.map