"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _carlendar = require("../controllers/carlendar.controller");

var _carlendar2 = _interopRequireDefault(_carlendar);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _carlendar2.default.findAll);
router.put("/updateIndex", _carlendar2.default.updateIndex);
router.get("/:id", _carlendar2.default.findOne);
router.post("/", _carlendar2.default.create);
router.put("/:id", _carlendar2.default.update);
router.delete("/:id", _carlendar2.default.remove);

exports.default = router;
//# sourceMappingURL=carlendar.routes.js.map