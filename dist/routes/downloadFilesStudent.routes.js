"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _downloadFilesStudent = require("../controllers/downloadFilesStudent.controller");

var _downloadFilesStudent2 = _interopRequireDefault(_downloadFilesStudent);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _downloadFilesStudent2.default.findAll);
router.put("/updateIndex", _downloadFilesStudent2.default.updateIndex);
router.get("/:id", _downloadFilesStudent2.default.findOne);
router.post("/", _downloadFilesStudent2.default.create);
router.put("/:id", _downloadFilesStudent2.default.update);
router.delete("/:id", _downloadFilesStudent2.default.remove);

exports.default = router;
//# sourceMappingURL=downloadFilesStudent.routes.js.map