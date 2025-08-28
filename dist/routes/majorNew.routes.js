"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _majorNew = require("../controllers/majorNew.controller");

var _majorNew2 = _interopRequireDefault(_majorNew);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _majorNew2.default.findAll);
router.get("/:id", _majorNew2.default.findOne);
router.post("/", _majorNew2.default.create);
router.put("/:id", _majorNew2.default.update);
router.delete("/:id", _majorNew2.default.remove);

exports.default = router;
//# sourceMappingURL=majorNew.routes.js.map