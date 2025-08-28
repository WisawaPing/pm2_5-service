"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _new = require("../controllers/new.controller");

var _new2 = _interopRequireDefault(_new);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _new2.default.findAll);
router.put("/updateIndex", _new2.default.updateIndex);
router.get("/:id", _new2.default.findOne);
router.post("/", _new2.default.create);
router.put("/:id", _new2.default.update);
router.delete("/:id", _new2.default.remove);

exports.default = router;
//# sourceMappingURL=new.routes.js.map