"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Course = sequelize.define("course", {
    // course_level: {
    //   type: Sequelize.STRING,
    // },
    // facualty: {
    //   type: Sequelize.STRING,
    // },
    title_en: {
      type: Sequelize.STRING
    },
    title_th: {
      type: Sequelize.STRING
    },
    short_desc_en: {
      type: Sequelize.TEXT
    },
    short_desc_th: {
      type: Sequelize.TEXT
    },
    course_highlights_th: {
      type: Sequelize.TEXT
    },
    course_highlights_en: {
      type: Sequelize.TEXT
    },
    full_desc_en: {
      type: Sequelize.TEXT
    },
    full_desc_th: {
      type: Sequelize.TEXT
    },
    img_url: {
      type: Sequelize.TEXT
    },
    img_url1: {
      type: Sequelize.TEXT
    },
    // types: {
    //   type: Sequelize.STRING,
    //   comment: "หลักสูตร มีสองภาค คือ ภาคปกติ หรือ ภาคปกติ",
    // },
    // course_highlights: {
    //   type: Sequelize.TEXT,
    //   comment: "จุดเด่นของหลักสูตร",
    // },

    // tuition_per_credit: {
    //   type: Sequelize.INTEGER,
    //   comment: "ค่าเล่าเรียนต่อหน่วยกิต",
    // },
    // estimated_tuition_fees: {
    //   type: Sequelize.INTEGER,
    //   comment: "ค่าใช้จ่ายตลอดหลักสูตรประมาณ",
    // },
    // study_time: {
    //   type: Sequelize.TEXT,
    //   comment: "เวลาเรียน",
    // },

    // tuition_per_credit_special_part: {
    //   type: Sequelize.INTEGER,
    //   comment: "ค่าเล่าเรียนต่อหน่วยกิต",
    // },
    // estimated_tuition_fees_special_part: {
    //   type: Sequelize.INTEGER,
    //   comment: "ค่าใช้จ่ายตลอดหลักสูตรประมาณ",
    // },
    // study_time_special_part: {
    //   type: Sequelize.TEXT,
    //   comment: "เวลาเรียน",
    // },

    // semester1: {
    //   type: Sequelize.TEXT,
    // },
    // semester2: {
    //   type: Sequelize.TEXT,
    // },
    // semester3: {
    //   type: Sequelize.TEXT,
    // },

    // semester1_special_part: {
    //   type: Sequelize.TEXT,
    // },
    // semester2_special_part: {
    //   type: Sequelize.TEXT,
    // },
    // semester3_special_part: {
    //   type: Sequelize.TEXT,
    // },

    img_url_more_detail: {
      type: Sequelize.TEXT
    },
    show_image_more_detail: {
      type: Sequelize.TEXT
    },
    job_opportunities_th_more_detail: {
      type: Sequelize.TEXT
    },
    job_opportunities_en_more_detail: {
      type: Sequelize.TEXT
    },
    status: {
      type: Sequelize.STRING
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return Course;
};
//# sourceMappingURL=course.model.js.map