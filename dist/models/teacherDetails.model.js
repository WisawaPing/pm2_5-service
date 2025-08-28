"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (sequelize, Sequelize) {
  var _sequelize$define;

  var TeacherDetail = sequelize.define("teacher_detail", (_sequelize$define = {
    name_en: {
      type: Sequelize.STRING,
      comment: "ชื่ออาจารย์ อิ้ง"
    },
    name_th: {
      type: Sequelize.STRING,
      comment: "ชื่ออาจารย์ ไทย"
    },
    images_url_profile: {
      type: Sequelize.TEXT,
      comment: "ลิ้งค์ภาพอาจารย์"
    },
    images_url_profile_big: {
      type: Sequelize.TEXT,
      comment: "ลิ้งค์ภาพอาจารย์ (ใหญ่)"
    },
    position_en: {
      type: Sequelize.STRING,
      comment: "ชื่อตำเเหน่ง อิ้ง"
    },
    position_th: {
      type: Sequelize.STRING,
      comment: "ชื่อตำเเหน่ง ไทย"
    },
    tel: {
      type: Sequelize.STRING(25)
    },
    email: {
      type: Sequelize.STRING(50),
      isEmail: true
    },
    educational_record_en: {
      type: Sequelize.TEXT,
      comment: "ประวัติการศึกษาอาจารย์ อิ้ง"
    },
    educational_record_th: {
      type: Sequelize.TEXT,
      comment: "ประวัติการศึกษาอาจารย์ ไทย"
    },
    expertise_and_interest_en: {
      type: Sequelize.TEXT,
      comment: "ความเชี่ยวชาญเเละความสนใจ อิ้ง"
    },
    expertise_and_interest_th: {
      type: Sequelize.TEXT,
      comment: "ความเชี่ยวชาญเเละความสนใจ ไทย"
    },
    off_campus_position_en: {
      type: Sequelize.TEXT,
      comment: "ตำแหน่งนอกสถาบัน อิ้ง"
    },
    off_campus_position_th: {
      type: Sequelize.TEXT,
      comment: "ตำแหน่งนอกสถาบัน ไทย"
    },
    awards_and_honors_en: {
      type: Sequelize.TEXT,
      comment: "รางวัลเเละเกียจติยศ อิ้ง"
    },
    awards_and_honors_th: {
      type: Sequelize.TEXT,
      comment: "รางวัลเเละเกียจติยศ ไทย"
    }
  }, (0, _defineProperty3.default)(_sequelize$define, "awards_and_honors_en", {
    type: Sequelize.TEXT,
    comment: "รางวัลเเละเกียจติยศ อิ้ง"
  }), (0, _defineProperty3.default)(_sequelize$define, "awards_and_honors_th", {
    type: Sequelize.TEXT,
    comment: "รางวัลเเละเกียจติยศ ไทย"
  }), (0, _defineProperty3.default)(_sequelize$define, "list_of_thesis_en", {
    type: Sequelize.TEXT,
    comment: "รายชื่อวิทยานิพนธ์ การค้นคว้าอิสระ อิ้ง"
  }), (0, _defineProperty3.default)(_sequelize$define, "list_of_thesis_th", {
    type: Sequelize.TEXT,
    comment: "รายชื่อวิทยานิพนธ์ การค้นคว้าอิสระ ไทย"
  }), (0, _defineProperty3.default)(_sequelize$define, "research_results_en", {
    type: Sequelize.TEXT,
    comment: "ผลงงานวิจัยที่ได้รับกการตีพิมพ์ อิ้ง"
  }), (0, _defineProperty3.default)(_sequelize$define, "research_results_th", {
    type: Sequelize.TEXT,
    comment: "ผลงงานวิจัยที่ได้รับกการตีพิมพ์ ไทย"
  }), (0, _defineProperty3.default)(_sequelize$define, "research_project_en", {
    type: Sequelize.TEXT,
    comment: "โครงการวิจัย (ที่ได้รับเงินสนับสนุน) อิ้ง"
  }), (0, _defineProperty3.default)(_sequelize$define, "research_project_th", {
    type: Sequelize.TEXT,
    comment: "โครงการวิจัย (ที่ได้รับเงินสนับสนุน) ไทย"
  }), (0, _defineProperty3.default)(_sequelize$define, "other_detail", {
    type: Sequelize.TEXT,
    comment: "รายละเอียดอื่นๆ"
  }), (0, _defineProperty3.default)(_sequelize$define, "types", {
    type: Sequelize.STRING
  }), (0, _defineProperty3.default)(_sequelize$define, "other_detail_th", {
    type: Sequelize.TEXT
  }), (0, _defineProperty3.default)(_sequelize$define, "other_detail_en", {
    type: Sequelize.TEXT
  }), (0, _defineProperty3.default)(_sequelize$define, "index", {
    type: Sequelize.INTEGER
  }), _sequelize$define));
  return TeacherDetail;
};
//# sourceMappingURL=teacherDetails.model.js.map