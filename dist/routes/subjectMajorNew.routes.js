"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subjectMajorNew = require("../controllers/subjectMajorNew.controller");

var _subjectMajorNew2 = _interopRequireDefault(_subjectMajorNew);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _subjectMajorNew2.default.findAll);
router.get("/:id", _subjectMajorNew2.default.findOne);
router.post("/", _subjectMajorNew2.default.create);
router.put("/:id", _subjectMajorNew2.default.update);
router.delete("/:id", _subjectMajorNew2.default.remove);

exports.default = router;
//# sourceMappingURL=subjectMajorNew.routes.js.map