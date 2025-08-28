"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _thesisAndResearch = require("../controllers/thesisAndResearch.controller");

var _thesisAndResearch2 = _interopRequireDefault(_thesisAndResearch);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _thesisAndResearch2.default.findAll);
router.put("/updateIndex", _thesisAndResearch2.default.updateIndex);
router.get("/:id", _thesisAndResearch2.default.findOne);
router.post("/", _thesisAndResearch2.default.create);
router.put("/:id", _thesisAndResearch2.default.update);
router.delete("/:id", _thesisAndResearch2.default.remove);

exports.default = router;
//# sourceMappingURL=thesisAndResearch.routes.js.map