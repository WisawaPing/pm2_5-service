"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require("../controllers/user.controller");

var _user2 = _interopRequireDefault(_user);

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _user2.default.findAll);
router.get("/:id", _user2.default.findOne);
router.post("/", _user2.default.create);
router.put("/:id", _user2.default.update);
router.post("/login", _user2.default.login);
router.delete("/:id", _user2.default.remove);

exports.default = router;
//# sourceMappingURL=user.routes.js.map