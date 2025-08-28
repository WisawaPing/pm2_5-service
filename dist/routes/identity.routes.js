"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _identity = require("../controllers/identity.controller");

var _identity2 = _interopRequireDefault(_identity);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _identity2.default.findAll);
router.put("/updateIndex", _identity2.default.updateIndex);
router.get("/:id", _identity2.default.findOne);
router.post("/", _identity2.default.create);
router.put("/:id", _identity2.default.update);
router.delete("/:id", _identity2.default.remove);

exports.default = router;
//# sourceMappingURL=identity.routes.js.map