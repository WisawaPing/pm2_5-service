'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import getRandomNumber from '~/utils/getRandomNumber'
// import csv from 'csv-parser'

var File = _models2.default.File;
// const Op = db.Sequelize.Op
// const Lottery = db.Lottery;

// import fileType from 'file-type'
var uploadFormData = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var sampleFile, uploadPath, _req$body, type, userId, name;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        sampleFile = void 0;
                        uploadPath = void 0;
                        // const { user } = req

                        _req$body = req.body, type = _req$body.type, userId = _req$body.userId;

                        console.log(type);

                        if (!(!req.files || (0, _keys2.default)(req.files).length === 0)) {
                            _context2.next = 6;
                            break;
                        }

                        return _context2.abrupt('return', res.send({ response_status: 'ERROR', message: 'No files were uploaded.' }));

                    case 6:

                        sampleFile = req.files.files;
                        name = makeid(5) + '-' + req.body.filename;

                        uploadPath = 'public/upload-file/' + name;

                        _context2.next = 11;
                        return sampleFile.mv(uploadPath, function () {
                            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(err) {
                                var file;
                                return _regenerator2.default.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                if (!err) {
                                                    _context.next = 2;
                                                    break;
                                                }

                                                return _context.abrupt('return', res.send({
                                                    response_status: 'ERROR',
                                                    message: err.message || 'Some error occurred while retrieving the files.'
                                                }));

                                            case 2:
                                                _context.next = 4;
                                                return File.create({ type: type, name: name, path: 'https://gscm-service.yuzudigital.com/' + uploadPath });

                                            case 4:
                                                file = _context.sent;

                                                res.send({ response_status: 'SUCCESS', data: file.dataValues, message: 'File was uploaded successfully' });

                                            case 6:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, undefined);
                            }));

                            return function (_x3) {
                                return _ref2.apply(this, arguments);
                            };
                        }());

                    case 11:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function uploadFormData(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

function makeid(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// const uploadFormData = async (req, res) => {
//     let sampleFile
//     let uploadPath
//     // const { user } = req
//     const body = req.body
//     // // console.log(type)

//     if (!req.uploadFile || Object.keys(req.uploadFile).length === 0) {
//         return res.send({
//             response_status: 'ERROR',
//             message: 'No files were uploaded.',
//         })
//     }

//     sampleFile = req.files.uploadFile
//     const name = `${Math.floor(Math.random() * Math.floor(99999999))}.${sampleFile.mimetype.split('/')[1]}`
//     uploadPath = `public/upload-file/${name}`

//     await sampleFile.mv(uploadPath, async (err) => {
//         if (err) {
//             return res.send({
//                 response_status: 'ERROR',
//                 message: err.message || 'Some error occurred while retrieving the files.',
//             })
//         }
//         const file = await File.create({
//             type: 'upload-file',
//             name,
//             path: `https://gscm-service.yuzudigital.com/upload-file/${name}`,
//         })
//         res.send({
//             response_status: 'SUCCESS',
//             data: file.dataValues,
//             message: 'File was uploaded successfully',
//         })

//     })
// }

// async function readCSV(name) {
//     // try {
//     let results = []
//     fs.createReadStream('./public/csv/csv-' + name)
//         .pipe(csv({
//             headers: false,
//         }))
//         .on('data', (data) => {
//             // console.log(data["2"])
//             // console.log(data)
//             // if (data["2"].trim() !== "" && data["2"].trim() !== "0") {
//             results.push(data)
//                 // }
//         })
//         .on('end', () => {
//             console.log(results);
//             results.forEach(async resData => {
//                 console.log(resData["_1"]);
//                 const lotData = {
//                     "lotteryNo": resData["1"],
//                     "time": resData["2"],
//                     "set": resData["3"],
//                     "lotteryDate": resData["4"],
//                     "stock": resData["5"],
//                     "owner": resData["6"],
//                     "urlImage": `https://readylotservice.readylottery.com/lottery-images/${resData["7"]}`,
//                     "price": 80
//                 }

//                 await Lottery.create(lotData);
//             });


//         });

//     return "SUCCESS";
//     // } catch (err) {
//     //     res.send({
//     //         response_status: 'ERROR',
//     //         message: err.message || 'Some error occurred while creating the Work Permit Form.',
//     //     })
//     // }
// }

// function convertData(val) {
//     if (val == '-' || val == '' || val == ' ') {
//         val = null;
//     }

//     return val;
// }

var uploadBase64 = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var sampleFile, uploadPath, user, _req$body2, type, file, userId, base64File, fileBitMap, name, filePath, fileRes;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        sampleFile = void 0;
                        uploadPath = void 0;
                        user = req.user;
                        _req$body2 = req.body, type = _req$body2.type, file = _req$body2.file, userId = _req$body2.userId;

                        if (file) {
                            _context3.next = 6;
                            break;
                        }

                        return _context3.abrupt('return', res.send({
                            response_status: 'ERROR',
                            message: err.message || 'No files were uploaded.'
                        }));

                    case 6:
                        base64File = file.split(';base64,').pop();
                        fileBitMap = new Buffer(base64File, 'base64');
                        // let mime = await fileType.fromBuffer(fileBitMap)

                        name = Math.floor(Math.random() * Math.floor(999)) + '-' + userId + '.png';
                        filePath = 'public/upload-file/' + name;

                        _fs2.default.writeFileSync(filePath, fileBitMap);

                        // const file = await File.create({
                        //     type,
                        //     name,
                        //     path: `https://gscm-service.yuzudigital.com/${uploadPath}`,
                        // })
                        _context3.next = 13;
                        return File.create({
                            type: type, name: name, path: 'https://gscm-service.yuzudigital.com/' + filePath
                            // filePath.replace('public/', '')

                        });

                    case 13:
                        fileRes = _context3.sent;

                        res.send({ response_status: 'SUCCESS', data: fileRes.dataValues, message: 'File was uploaded successfully' });

                    case 15:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function uploadBase64(_x4, _x5) {
        return _ref3.apply(this, arguments);
    };
}();

// const findAll = async (req, res) => {
// try {
//     let files = []
//     if (Object.keys(req.query).length > 0) {
//       const where = {}
//       Object.keys(req.query).forEach(key => {
//         if (key === 'lang') {
//           lang = req.query[key]
//           return
//         }
//         where[key] = req.query[key]
//       })
//       files = await File.findAll({
//         order: [
//           [ 'createdAt', 'DESC' ],
//         ],
//         where,
//       })
//     }
//     else {
//       files = await File.findAll({
//         order: [
//           [ 'createdAt', 'DESC' ],
//         ]
//       })
//     }
//     res.send({
//       response_status: 'SUCCESS',
//       data: files,
//     })
// }
// catch (err) {
//     res.send({
//       response_status: 'ERROR',
//       message: err.message || 'Some error occurred while retrieving the files.',
//     })
// }
// }

// const findAllList = async (req, res) => {
// try {
//     let files = []
//     files = await File.findAll({
//       where: {
//         isCustom: false,
//       },
//       order: [
//         [ 'createdAt', 'DESC' ],
//       ]
//     })
//     res.send({
//       response_status: 'SUCCESS',
//       data: files,
//     })
// }
// catch (err) {
//     res.send({
//       response_status: 'ERROR',
//       message: err.message || 'Some error occurred while retrieving the files.',
//     })
// }
// }

// const findOne = async (req, res) => {
// try {
//     const id = req.params.id
//     const file = await File.findOne({ where: { id }})
//     res.send({
//       response_status: 'ERROR',
//       data: file.dataValues,
//     })
// }
// catch (err) {
//     res.send({
//       response_status: 'ERROR',
//       message: err.message || 'Some error occurred while retrieving the file.',
//     })
// }
// }

// const update = async (req, res) => {
// try {
//     const id = req.params.id
//     const file = await File.update(req.body, { where: { id }})
//     if (file == 1) {
//       res.send({
//         response_status: 'SUCCESS',
//         message: 'File was updated successfully',
//       })
//     }
//     else {
//       res.send({
//         response_status: 'ERROR',
//         message: `File (ID: ${id}) was not found.`,
//       })
//     }
// }
// catch (err) {
//     res.send({
//       response_status: 'ERROR',
//       message: err.message || 'Some error occurred while updating the file.',
//     })
// }
// }

// const approve = async (req, res) => {
// try {
//     const id = req.params.id
//     const file = await File.update({ activeFlag: true }, { where: { id }})
//     if (file == 1) {
//       res.send({
//         response_status: 'SUCCESS',
//         message: 'File was approved successfully',
//       })
//     }
//     else {
//       res.send({
//         response_status: 'ERROR',
//         message: `File (ID: ${id}) was not found.`,
//       })
//     }
// }
// catch (err) {
//     res.send({
//       response_status: 'ERROR',
//       message: err.message || 'Some error occurred while updating the file.',
//     })
// }
// }

// const remove = async (req, res) => {
// try {
//     const id = req.params.id
//     const file = await File.destroy({ where: { id }})
//     if (file == 1) {
//       res.send({
//         response_status: 'SUCCESS',
//         message: 'File was deleted successfully',
//       })
//     }
//     else {
//       res.send({
//         response_status: 'ERROR',
//         message: `Log (ID: ${id}) was not found.`,
//       })
//     }
// }
// catch (err) {
//     res.send({
//       response_status: 'ERROR',
//       message: err.message || 'Some error occurred while deleting the file.',
//     })
// }
// }

exports.default = {
    uploadFormData: uploadFormData, uploadBase64: uploadBase64
    // findAll,
    // findAllList,
    // update,
    // findOne,
    // remove,
    // approve,
};
//# sourceMappingURL=file.controller.js.map