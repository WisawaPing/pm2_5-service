"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subjectTypeCours = require("../controllers/subjectTypeCours.controller");

var _subjectTypeCours2 = _interopRequireDefault(_subjectTypeCours);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _subjectTypeCours2.default.findAll);
router.get("/:id", _subjectTypeCours2.default.findOne);
router.post("/", _subjectTypeCours2.default.create);
router.put("/:id", _subjectTypeCours2.default.update);
router.delete("/:id", _subjectTypeCours2.default.remove);

exports.default = router;
//# sourceMappingURL=subjectTypeCours.routes.js.map