"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subjectMajor = require("../controllers/subjectMajor.controller");

var _subjectMajor2 = _interopRequireDefault(_subjectMajor);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _subjectMajor2.default.findAll);
router.get("/:id", _subjectMajor2.default.findOne);
router.post("/", _subjectMajor2.default.create);
router.put("/:id", _subjectMajor2.default.update);
router.delete("/:id", _subjectMajor2.default.remove);

exports.default = router;
//# sourceMappingURL=subjectMajor.routes.js.map