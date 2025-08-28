"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _knowledgeLibrary = require("../controllers/knowledgeLibrary.controller");

var _knowledgeLibrary2 = _interopRequireDefault(_knowledgeLibrary);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _knowledgeLibrary2.default.findAll);
router.put("/updateIndex", _knowledgeLibrary2.default.updateIndex);
router.get("/:id", _knowledgeLibrary2.default.findOne);
router.post("/", _knowledgeLibrary2.default.create);
router.put("/:id", _knowledgeLibrary2.default.update);
router.delete("/:id", _knowledgeLibrary2.default.remove);

exports.default = router;
//# sourceMappingURL=knowledgeLibrary.routes.js.map