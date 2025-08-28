"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _award = require("../controllers/award.controller");

var _award2 = _interopRequireDefault(_award);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _award2.default.findAll);
router.put("/updateIndex", _award2.default.updateIndex);
router.get("/:id", _award2.default.findOne);
router.post("/", _award2.default.create);
router.put("/:id", _award2.default.update);
router.delete("/:id", _award2.default.remove);

exports.default = router;
//# sourceMappingURL=award.routes.js.map