"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var SuccessfulAlumni = sequelize.define("successful_Alumni", {
    name_th: {
      type: Sequelize.STRING
    },
    name_en: {
      type: Sequelize.STRING
    },
    img_url: {
      type: Sequelize.TEXT
    },
    generation: {
      type: Sequelize.TEXT,
      comment: "รุ่นที่สำเร็จการศึกษา"
    },
    current_job_th: {
      type: Sequelize.TEXT,
      comment: "ปัจจุบันทำงานเกี่ยวกับอะไร"
    },
    current_job_en: {
      type: Sequelize.TEXT,
      comment: "ปัจจุบันทำงานเกี่ยวกับอะไร"
    }
  });
  return SuccessfulAlumni;
};
//# sourceMappingURL=successfulAlumni.model.js.map