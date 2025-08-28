"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enroll = require("../controllers/enroll.controller");

var _enroll2 = _interopRequireDefault(_enroll);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _enroll2.default.findAll);
router.put("/updateIndex", _enroll2.default.updateIndex);
router.get("/:id", _enroll2.default.findOne);
router.post("/", _enroll2.default.create);
router.put("/:id", _enroll2.default.update);
router.delete("/:id", _enroll2.default.remove);

exports.default = router;
//# sourceMappingURL=enroll.routes.js.map