"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _groupInformation = require("../controllers/groupInformation.controller");

var _groupInformation2 = _interopRequireDefault(_groupInformation);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _groupInformation2.default.findAll);
router.get("/:id", _groupInformation2.default.findOne);
router.post("/", _groupInformation2.default.create);
router.put("/:id", _groupInformation2.default.update);
router.delete("/:id", _groupInformation2.default.remove);

exports.default = router;
//# sourceMappingURL=groupInformation.routes.js.map