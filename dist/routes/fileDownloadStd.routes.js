"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fileDownloadStd = require("../controllers/fileDownloadStd.controller");

var _fileDownloadStd2 = _interopRequireDefault(_fileDownloadStd);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _fileDownloadStd2.default.findAll);
router.get("/:id", _fileDownloadStd2.default.findOne);
router.post("/", _fileDownloadStd2.default.create);
router.put("/:id", _fileDownloadStd2.default.update);
router.delete("/:id", _fileDownloadStd2.default.remove);

exports.default = router;
//# sourceMappingURL=fileDownloadStd.routes.js.map