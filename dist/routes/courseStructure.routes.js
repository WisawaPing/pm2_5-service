"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _courseStructure = require("../controllers/courseStructure.controller");

var _courseStructure2 = _interopRequireDefault(_courseStructure);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _courseStructure2.default.findAll);
router.get("/:id", _courseStructure2.default.findOne);
router.post("/", _courseStructure2.default.create);

router.post("/form4", _courseStructure2.default.form4);
router.get("/form4/:courseId", _courseStructure2.default.getform4);

router.delete("/form4/:courseId", _courseStructure2.default.removeform4);

router.put("/form4", _courseStructure2.default.updateform4);

router.put("/:id", _courseStructure2.default.update);
router.delete("/:id", _courseStructure2.default.remove);

exports.default = router;
//# sourceMappingURL=courseStructure.routes.js.map