"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _teacherDetails = require("../controllers/teacherDetails.controller");

var _teacherDetails2 = _interopRequireDefault(_teacherDetails);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _teacherDetails2.default.findAll);
router.put("/updateIndex", _teacherDetails2.default.updateIndex);
router.get("/:id", _teacherDetails2.default.findOne);
router.post("/", _teacherDetails2.default.create);
router.put("/:id", _teacherDetails2.default.update);
router.delete("/:id", _teacherDetails2.default.remove);

exports.default = router;
//# sourceMappingURL=teacherDetails.routes.js.map