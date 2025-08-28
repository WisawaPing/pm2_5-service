"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _level = require("../controllers/level.controller");

var _level2 = _interopRequireDefault(_level);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _level2.default.findAll);
router.get("/:id", _level2.default.findOne);
router.post("/", _level2.default.create);
router.put("/:id", _level2.default.update);
router.delete("/:id", _level2.default.remove);

exports.default = router;
//# sourceMappingURL=level.routes.js.map