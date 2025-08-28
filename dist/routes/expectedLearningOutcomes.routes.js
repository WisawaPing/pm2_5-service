"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expectedLearningOutcomes = require("../controllers/expectedLearningOutcomes.controller");

var _expectedLearningOutcomes2 = _interopRequireDefault(_expectedLearningOutcomes);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _expectedLearningOutcomes2.default.findAll);
router.get("/:id", _expectedLearningOutcomes2.default.findOne);
router.post("/", _expectedLearningOutcomes2.default.create);
router.put("/:id", _expectedLearningOutcomes2.default.update);
router.delete("/:id", _expectedLearningOutcomes2.default.remove);

exports.default = router;
//# sourceMappingURL=expectedLearningOutcomes.routes.js.map