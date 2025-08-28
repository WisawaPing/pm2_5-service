"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mou = require("../controllers/mou.controller");

var _mou2 = _interopRequireDefault(_mou);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _mou2.default.findAll);
router.put("/updateIndex", _mou2.default.updateIndex);
router.get("/:id", _mou2.default.findOne);
router.post("/", _mou2.default.create);
router.put("/:id", _mou2.default.update);
router.delete("/:id", _mou2.default.remove);

exports.default = router;
//# sourceMappingURL=mou.routes.js.map