"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _level = require("./level.association");

var _level2 = _interopRequireDefault(_level);

var _course = require("./course.association");

var _course2 = _interopRequireDefault(_course);

var _successfulAlumni = require("./successfulAlumni.association");

var _successfulAlumni2 = _interopRequireDefault(_successfulAlumni);

var _scholarship = require("./scholarship.association");

var _scholarship2 = _interopRequireDefault(_scholarship);

var _knowledgeTest = require("./knowledgeTest.association");

var _knowledgeTest2 = _interopRequireDefault(_knowledgeTest);

var _qualificationExam = require("./qualificationExam.association");

var _qualificationExam2 = _interopRequireDefault(_qualificationExam);

var _major = require("./major.association");

var _major2 = _interopRequireDefault(_major);

var _studentComment = require("./studentComment.association");

var _studentComment2 = _interopRequireDefault(_studentComment);

var _faq = require("./faq.association");

var _faq2 = _interopRequireDefault(_faq);

var _courseStructure = require("./courseStructure.assciation");

var _courseStructure2 = _interopRequireDefault(_courseStructure);

var _coursesOffered = require("./coursesOffered.asssociation");

var _coursesOffered2 = _interopRequireDefault(_coursesOffered);

var _expectedLearningOutcomes = require("./expectedLearningOutcomes.association");

var _expectedLearningOutcomes2 = _interopRequireDefault(_expectedLearningOutcomes);

var _courseFormat = require("./courseFormat.association");

var _courseFormat2 = _interopRequireDefault(_courseFormat);

var _article = require("./article.association");

var _article2 = _interopRequireDefault(_article);

var _subjectMajor = require("./subjectMajor.association");

var _subjectMajor2 = _interopRequireDefault(_subjectMajor);

var _subjectTypeCourse = require("./subjectTypeCourse.association");

var _subjectTypeCourse2 = _interopRequireDefault(_subjectTypeCourse);

var _subCoursesOffered = require("./subCoursesOffered.association");

var _subCoursesOffered2 = _interopRequireDefault(_subCoursesOffered);

var _priceItems = require("./priceItems.association");

var _priceItems2 = _interopRequireDefault(_priceItems);

var _priceCourse = require("./priceCourse.association");

var _priceCourse2 = _interopRequireDefault(_priceCourse);

var _review = require("./review.association");

var _review2 = _interopRequireDefault(_review);

var _semester = require("./semester.assocaition");

var _semester2 = _interopRequireDefault(_semester);

var _studyDayTime = require("./studyDayTime.association");

var _studyDayTime2 = _interopRequireDefault(_studyDayTime);

var _enroll = require("./enroll.association");

var _enroll2 = _interopRequireDefault(_enroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (db) {
  (0, _enroll2.default)(db);
  (0, _semester2.default)(db);
  (0, _studyDayTime2.default)(db);
  (0, _review2.default)(db);
  (0, _priceCourse2.default)(db);
  (0, _priceItems2.default)(db);
  (0, _subCoursesOffered2.default)(db);
  (0, _subjectTypeCourse2.default)(db);
  (0, _subjectMajor2.default)(db);
  (0, _article2.default)(db);
  (0, _expectedLearningOutcomes2.default)(db);
  (0, _courseFormat2.default)(db);
  (0, _coursesOffered2.default)(db);
  (0, _level2.default)(db);
  (0, _courseStructure2.default)(db);
  (0, _faq2.default)(db);
  (0, _course2.default)(db);
  (0, _successfulAlumni2.default)(db);
  (0, _scholarship2.default)(db);
  (0, _knowledgeTest2.default)(db);
  (0, _qualificationExam2.default)(db);
  (0, _major2.default)(db);
  (0, _studentComment2.default)(db);
};
//# sourceMappingURL=index.js.map