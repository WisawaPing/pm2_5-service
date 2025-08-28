"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _priceItems = require("../controllers/priceItems.controller");

var _priceItems2 = _interopRequireDefault(_priceItems);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _priceItems2.default.findAll);
router.get("/:id", _priceItems2.default.findOne);
router.post("/", _priceItems2.default.create);
router.put("/:id", _priceItems2.default.update);
router.delete("/:id", _priceItems2.default.remove);

exports.default = router;
//# sourceMappingURL=priceItems.routes.js.map