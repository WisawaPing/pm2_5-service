"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alumniArticles = require("../controllers/alumniArticles.controller");

var _alumniArticles2 = _interopRequireDefault(_alumniArticles);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _alumniArticles2.default.findAll);
router.get("/:id", _alumniArticles2.default.findOne);
router.post("/", _alumniArticles2.default.create);
router.put("/:id", _alumniArticles2.default.update);
router.delete("/:id", _alumniArticles2.default.remove);

exports.default = router;
//# sourceMappingURL=alumniArticles.routes.js.map