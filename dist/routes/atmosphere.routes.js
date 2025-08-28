"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _atmosphere = require("../controllers/atmosphere.controller");

var _atmosphere2 = _interopRequireDefault(_atmosphere);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _atmosphere2.default.findAll);
router.get("/:id", _atmosphere2.default.findOne);
router.post("/", _atmosphere2.default.create);
router.put("/:id", _atmosphere2.default.update);
router.delete("/:id", _atmosphere2.default.remove);

exports.default = router;
//# sourceMappingURL=atmosphere.routes.js.map