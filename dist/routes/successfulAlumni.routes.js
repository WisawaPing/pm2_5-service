"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _successfulAlumni = require("../controllers/successfulAlumni.controller");

var _successfulAlumni2 = _interopRequireDefault(_successfulAlumni);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _successfulAlumni2.default.findAll);
router.get("/:id", _successfulAlumni2.default.findOne);
router.post("/", _successfulAlumni2.default.create);
router.put("/:id", _successfulAlumni2.default.update);
router.delete("/:id", _successfulAlumni2.default.remove);

exports.default = router;
//# sourceMappingURL=successfulAlumni.routes.js.map