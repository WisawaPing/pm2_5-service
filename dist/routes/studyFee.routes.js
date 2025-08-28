"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _studyFee = require("../controllers/studyFee.controller");

var _studyFee2 = _interopRequireDefault(_studyFee);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _studyFee2.default.findAll);
router.get("/:id", _studyFee2.default.findOne);
router.post("/", _studyFee2.default.create);
router.put("/:id", _studyFee2.default.update);
router.delete("/:id", _studyFee2.default.remove);

exports.default = router;
//# sourceMappingURL=studyFee.routes.js.map