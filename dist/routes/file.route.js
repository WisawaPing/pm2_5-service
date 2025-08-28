"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _auth = require("../middleware/auth");

var _auth2 = _interopRequireDefault(_auth);

var _file = require("../controllers/file.controller");

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.post("/formData", _file2.default.uploadFormData);
router.post("/base64", _file2.default.uploadBase64);
// router.get('/list',   fileController.findAllList)
// router.get('/:id',   fileController.findOne)
// router.post('/',   fileController.create)
// router.put('/:id',   fileController.update)
// router.delete('/:id',   fileController.remove)

exports.default = router;
//# sourceMappingURL=file.route.js.map