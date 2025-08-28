"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _structuralPlan = require("../controllers/structuralPlan.controller");

var _structuralPlan2 = _interopRequireDefault(_structuralPlan);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _structuralPlan2.default.findAll);
router.get("/:id", _structuralPlan2.default.findOne);
router.post("/", _structuralPlan2.default.create);
router.put("/:id", _structuralPlan2.default.update);
router.delete("/:id", _structuralPlan2.default.remove);

exports.default = router;
//# sourceMappingURL=structuralPlan.routes.js.map