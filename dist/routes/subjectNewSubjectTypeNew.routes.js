"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subjectNewSubjectTypeNew = require("../controllers/subjectNewSubjectTypeNew.controller");

var _subjectNewSubjectTypeNew2 = _interopRequireDefault(_subjectNewSubjectTypeNew);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _subjectNewSubjectTypeNew2.default.findAll);
router.get("/:id", _subjectNewSubjectTypeNew2.default.findOne);
router.post("/", _subjectNewSubjectTypeNew2.default.create);
router.put("/:id", _subjectNewSubjectTypeNew2.default.update);
router.delete("/:id", _subjectNewSubjectTypeNew2.default.remove);

exports.default = router;
//# sourceMappingURL=subjectNewSubjectTypeNew.routes.js.map