"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imageAtmosphere = require("../controllers/imageAtmosphere.controller");

var _imageAtmosphere2 = _interopRequireDefault(_imageAtmosphere);

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get("/", _imageAtmosphere2.default.findAll);
router.put("/updateIndex", _imageAtmosphere2.default.updateIndex);
router.get("/:id", _imageAtmosphere2.default.findOne);
router.post("/", _imageAtmosphere2.default.create);
router.put("/:id", _imageAtmosphere2.default.update);
router.delete("/:id", _imageAtmosphere2.default.remove);

exports.default = router;
//# sourceMappingURL=imageAtmosphere.routes.js.map