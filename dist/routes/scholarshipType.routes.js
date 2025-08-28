"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scholarshipType = require("../controllers/scholarshipType.controller");

var _scholarshipType2 = _interopRequireDefault(_scholarshipType);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _scholarshipType2.default.findAll);
router.get("/:id", _scholarshipType2.default.findOne);
router.post("/", _scholarshipType2.default.create);
router.put("/:id", _scholarshipType2.default.update);
router.delete("/:id", _scholarshipType2.default.remove);

exports.default = router;
//# sourceMappingURL=scholarshipType.routes.js.map