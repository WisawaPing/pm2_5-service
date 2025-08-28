"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _welcomePopUp = require("../controllers/welcomePopUp.controller");

var _welcomePopUp2 = _interopRequireDefault(_welcomePopUp);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _welcomePopUp2.default.findAll);
router.get("/:id", _welcomePopUp2.default.findOne);
router.post("/", _welcomePopUp2.default.create);
router.put("/:id", _welcomePopUp2.default.update);
router.delete("/:id", _welcomePopUp2.default.remove);

exports.default = router;
//# sourceMappingURL=welcome_pop_ups.routes.js.map