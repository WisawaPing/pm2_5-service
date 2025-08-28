"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _review = require("../controllers/review.controller");

var _review2 = _interopRequireDefault(_review);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _review2.default.findAll);
router.get("/:id", _review2.default.findOne);
router.post("/", _review2.default.create);
router.put("/:id", _review2.default.update);
router.delete("/:id", _review2.default.remove);

exports.default = router;
//# sourceMappingURL=review.routes.js.map