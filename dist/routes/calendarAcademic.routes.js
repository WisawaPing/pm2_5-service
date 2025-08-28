"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calendarAcademic = require("../controllers/calendarAcademic.controller");

var _calendarAcademic2 = _interopRequireDefault(_calendarAcademic);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _calendarAcademic2.default.findAll);
router.get("/:id", _calendarAcademic2.default.findOne);
router.post("/", _calendarAcademic2.default.create);
router.put("/:id", _calendarAcademic2.default.update);
router.delete("/:id", _calendarAcademic2.default.remove);

exports.default = router;
//# sourceMappingURL=calendarAcademic.routes.js.map