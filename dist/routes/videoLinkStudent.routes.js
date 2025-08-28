"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _videoLinkStudent = require("../controllers/videoLinkStudent.controller");

var _videoLinkStudent2 = _interopRequireDefault(_videoLinkStudent);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _videoLinkStudent2.default.findAll);
router.get("/:id", _videoLinkStudent2.default.findOne);
router.post("/", _videoLinkStudent2.default.create);
router.put("/:id", _videoLinkStudent2.default.update);
router.delete("/:id", _videoLinkStudent2.default.remove);

exports.default = router;
//# sourceMappingURL=videoLinkStudent.routes.js.map