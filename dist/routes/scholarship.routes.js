"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scholarship = require("../controllers/scholarship.controller");

var _scholarship2 = _interopRequireDefault(_scholarship);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _scholarship2.default.findAll);
router.put("/updateIndex", _scholarship2.default.updateIndex);
router.get("/:id", _scholarship2.default.findOne);
router.post("/", _scholarship2.default.create);
router.put("/:id", _scholarship2.default.update);
router.delete("/:id", _scholarship2.default.remove);

exports.default = router;
//# sourceMappingURL=scholarship.routes.js.map