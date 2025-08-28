"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _academicConference = require("../controllers/academicConference.controller");

var _academicConference2 = _interopRequireDefault(_academicConference);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _academicConference2.default.findAll);
router.get("/:id", _academicConference2.default.findOne);
router.post("/", _academicConference2.default.create);
router.put("/:id", _academicConference2.default.update);
router.delete("/:id", _academicConference2.default.remove);

exports.default = router;
//# sourceMappingURL=academicConference.routes.js.map