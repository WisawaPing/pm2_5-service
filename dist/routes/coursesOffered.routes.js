"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coursesOffered = require("../controllers/coursesOffered.controller");

var _coursesOffered2 = _interopRequireDefault(_coursesOffered);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _coursesOffered2.default.findAll);
router.get("/:id", _coursesOffered2.default.findOne);
router.post("/", _coursesOffered2.default.create);
router.put("/:id", _coursesOffered2.default.update);
router.delete("/:id", _coursesOffered2.default.remove);

exports.default = router;
//# sourceMappingURL=coursesOffered.routes.js.map