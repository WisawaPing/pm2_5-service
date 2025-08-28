"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _studentComment = require("../controllers/studentComment.controller");

var _studentComment2 = _interopRequireDefault(_studentComment);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _studentComment2.default.findAll);
router.put("/updateIndex", _studentComment2.default.updateIndex);
router.get("/:id", _studentComment2.default.findOne);
router.post("/", _studentComment2.default.create);
router.put("/:id", _studentComment2.default.update);
router.delete("/:id", _studentComment2.default.remove);

exports.default = router;
//# sourceMappingURL=studentComment.routes.js.map