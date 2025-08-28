"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tag = require("../controllers/tag.controller");

var _tag2 = _interopRequireDefault(_tag);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _tag2.default.findAll);
router.get("/:id", _tag2.default.findOne);
router.post("/", _tag2.default.create);
router.put("/:id", _tag2.default.update);
router.delete("/:id", _tag2.default.remove);

exports.default = router;
//# sourceMappingURL=tag.routes.js.map