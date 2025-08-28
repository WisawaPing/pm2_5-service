"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subjectStructure = require("../controllers/subjectStructure.controller");

var _subjectStructure2 = _interopRequireDefault(_subjectStructure);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _subjectStructure2.default.findAll);
router.get("/:id", _subjectStructure2.default.findOne);
router.post("/", _subjectStructure2.default.create);
router.put("/:id", _subjectStructure2.default.update);
router.delete("/:id", _subjectStructure2.default.remove);

exports.default = router;
//# sourceMappingURL=subjectStructure.routes.js.map