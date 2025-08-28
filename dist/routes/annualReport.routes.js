"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _annualReport = require("../controllers/annualReport.controller");

var _annualReport2 = _interopRequireDefault(_annualReport);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _annualReport2.default.findAll);
router.put("/updateIndex", _annualReport2.default.updateIndex);
router.get("/:id", _annualReport2.default.findOne);
router.post("/", _annualReport2.default.create);
router.put("/:id", _annualReport2.default.update);
router.delete("/:id", _annualReport2.default.remove);

exports.default = router;
//# sourceMappingURL=annualReport.routes.js.map