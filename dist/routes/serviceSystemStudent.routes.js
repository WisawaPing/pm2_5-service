"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serviceSystemStudent = require("../controllers/serviceSystemStudent.controller");

var _serviceSystemStudent2 = _interopRequireDefault(_serviceSystemStudent);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _serviceSystemStudent2.default.findAll);
router.get("/:id", _serviceSystemStudent2.default.findOne);
router.post("/", _serviceSystemStudent2.default.create);
router.put("/:id", _serviceSystemStudent2.default.update);
router.delete("/:id", _serviceSystemStudent2.default.remove);

exports.default = router;
//# sourceMappingURL=serviceSystemStudent.routes.js.map