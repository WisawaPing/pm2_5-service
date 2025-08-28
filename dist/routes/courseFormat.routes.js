"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _courseFormat = require("../controllers/courseFormat.controller");

var _courseFormat2 = _interopRequireDefault(_courseFormat);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _courseFormat2.default.findAll);
router.get("/:id", _courseFormat2.default.findOne);
router.post("/", _courseFormat2.default.create);
router.put("/:id", _courseFormat2.default.update);
router.delete("/:id", _courseFormat2.default.remove);

exports.default = router;
//# sourceMappingURL=courseFormat.routes.js.map