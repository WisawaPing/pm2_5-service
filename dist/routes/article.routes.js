"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _article = require("../controllers/article.controller");

var _article2 = _interopRequireDefault(_article);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _article2.default.findAll);
router.get("/:id", _article2.default.findOne);
router.post("/", _article2.default.create);
router.put("/:id", _article2.default.update);
router.delete("/:id", _article2.default.remove);

exports.default = router;
//# sourceMappingURL=article.routes.js.map