"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _semester = require("../controllers/semester.controller");

var _semester2 = _interopRequireDefault(_semester);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _semester2.default.findAll);
router.get("/:id", _semester2.default.findOne);
router.post("/", _semester2.default.create);
router.put("/:id", _semester2.default.update);
router.delete("/:id", _semester2.default.remove);

exports.default = router;
//# sourceMappingURL=semester.routes.js.map