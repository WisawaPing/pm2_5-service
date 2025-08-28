"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _knowledgeTestAndQualificationExam = require("../controllers/knowledgeTestAndQualificationExam.controller");

var _knowledgeTestAndQualificationExam2 = _interopRequireDefault(_knowledgeTestAndQualificationExam);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _knowledgeTestAndQualificationExam2.default.findAll);
router.get("/:id", _knowledgeTestAndQualificationExam2.default.findOne);
router.post("/", _knowledgeTestAndQualificationExam2.default.create);
router.put("/:id", _knowledgeTestAndQualificationExam2.default.update);
router.delete("/:id", _knowledgeTestAndQualificationExam2.default.remove);

exports.default = router;
//# sourceMappingURL=knowledgeTestAndQualificationExam.routes.js.map