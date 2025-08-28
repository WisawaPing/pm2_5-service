"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subjectTypeNew = require("../controllers/subjectTypeNew.controller");

var _subjectTypeNew2 = _interopRequireDefault(_subjectTypeNew);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _subjectTypeNew2.default.findAll);
router.get("/:id", _subjectTypeNew2.default.findOne);
router.post("/", _subjectTypeNew2.default.create);
router.put("/:id", _subjectTypeNew2.default.update);
router.delete("/:id", _subjectTypeNew2.default.remove);

exports.default = router;
//# sourceMappingURL=subjectTypeNew.routes.js.map