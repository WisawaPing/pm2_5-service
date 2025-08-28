"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _knowledgeTest = require("../controllers/knowledgeTest.controller");

var _knowledgeTest2 = _interopRequireDefault(_knowledgeTest);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _knowledgeTest2.default.findAll);
router.get("/:id", _knowledgeTest2.default.findOne);
router.post("/", _knowledgeTest2.default.create);
router.put("/:id", _knowledgeTest2.default.update);
router.delete("/:id", _knowledgeTest2.default.remove);

exports.default = router;
//# sourceMappingURL=knowledgeTest.routes.js.map