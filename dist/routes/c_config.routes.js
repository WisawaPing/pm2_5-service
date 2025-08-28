"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _c_config = require("../controllers/c_config.controller");

var _c_config2 = _interopRequireDefault(_c_config);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _c_config2.default.findAll);
router.get("/:id", _c_config2.default.findOne);
router.post("/", _c_config2.default.create);
router.put("/:id", _c_config2.default.update);
router.delete("/:id", _c_config2.default.remove);

exports.default = router;
//# sourceMappingURL=c_config.routes.js.map