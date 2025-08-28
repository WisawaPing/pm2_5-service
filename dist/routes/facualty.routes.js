"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _facualty = require("../controllers/facualty.controller");

var _facualty2 = _interopRequireDefault(_facualty);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _facualty2.default.findAll);
router.get("/:id", _facualty2.default.findOne);
router.post("/", _facualty2.default.create);
router.put("/:id", _facualty2.default.update);
router.delete("/:id", _facualty2.default.remove);

exports.default = router;
//# sourceMappingURL=facualty.routes.js.map