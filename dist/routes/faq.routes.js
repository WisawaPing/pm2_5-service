"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _faq = require("../controllers/faq.controller");

var _faq2 = _interopRequireDefault(_faq);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _faq2.default.findAll);
router.get("/:id", _faq2.default.findOne);
router.post("/", _faq2.default.create);
router.put("/:id", _faq2.default.update);
router.delete("/:id", _faq2.default.remove);

exports.default = router;
//# sourceMappingURL=faq.routes.js.map