"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _academicJournal = require("../controllers/academicJournal.controller");

var _academicJournal2 = _interopRequireDefault(_academicJournal);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _academicJournal2.default.findAll);
router.put("/updateIndex", _academicJournal2.default.updateIndex);
router.get("/:id", _academicJournal2.default.findOne);
router.post("/", _academicJournal2.default.create);
router.put("/:id", _academicJournal2.default.update);
router.delete("/:id", _academicJournal2.default.remove);

exports.default = router;
//# sourceMappingURL=academicJournal.routes.js.map