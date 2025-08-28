"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _studyDayTime = require("../controllers/studyDayTime.model");

var _studyDayTime2 = _interopRequireDefault(_studyDayTime);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _studyDayTime2.default.findAll);
router.get("/:id", _studyDayTime2.default.findOne);
router.post("/", _studyDayTime2.default.create);
router.put("/:id", _studyDayTime2.default.update);
router.delete("/:id", _studyDayTime2.default.remove);

exports.default = router;
//# sourceMappingURL=studyDayTime.routes.js.map