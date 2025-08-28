"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require("./user.routes");

var _user2 = _interopRequireDefault(_user);

var _banner = require("./banner.routes");

var _banner2 = _interopRequireDefault(_banner);

var _course = require("./course.routes");

var _course2 = _interopRequireDefault(_course);

var _new = require("./new.routes");

var _new2 = _interopRequireDefault(_new);

var _studentComment = require("./studentComment.routes");

var _studentComment2 = _interopRequireDefault(_studentComment);

var _level = require("./level.routes");

var _level2 = _interopRequireDefault(_level);

var _facualty = require("./facualty.routes");

var _facualty2 = _interopRequireDefault(_facualty);

var _c_config = require("./c_config.routes");

var _c_config2 = _interopRequireDefault(_c_config);

var _academicConference = require("./academicConference.routes");

var _academicConference2 = _interopRequireDefault(_academicConference);

var _academicJournal = require("./academicJournal.routes");

var _academicJournal2 = _interopRequireDefault(_academicJournal);

var _alumniArticles = require("./alumniArticles.routes");

var _alumniArticles2 = _interopRequireDefault(_alumniArticles);

var _annualReport = require("./annualReport.routes");

var _annualReport2 = _interopRequireDefault(_annualReport);

var _knowledgeLibrary = require("./knowledgeLibrary.routes");

var _knowledgeLibrary2 = _interopRequireDefault(_knowledgeLibrary);

var _successfulAlumni = require("./successfulAlumni.routes");

var _successfulAlumni2 = _interopRequireDefault(_successfulAlumni);

var _thesisAndResearch = require("./thesisAndResearch.routes");

var _thesisAndResearch2 = _interopRequireDefault(_thesisAndResearch);

var _major = require("./major.routes");

var _major2 = _interopRequireDefault(_major);

var _mou = require("./mou.routes");

var _mou2 = _interopRequireDefault(_mou);

var _scholarship = require("./scholarship.routes");

var _scholarship2 = _interopRequireDefault(_scholarship);

var _knowledgeTest = require("./knowledgeTest.routes");

var _knowledgeTest2 = _interopRequireDefault(_knowledgeTest);

var _qualificationExam = require("./qualificationExam.routes");

var _qualificationExam2 = _interopRequireDefault(_qualificationExam);

var _studentWork = require("./studentWork.routes");

var _studentWork2 = _interopRequireDefault(_studentWork);

var _teacherDetails = require("./teacherDetails.routes");

var _teacherDetails2 = _interopRequireDefault(_teacherDetails);

var _welcomePopUp = require("./welcomePopUp.routes");

var _welcomePopUp2 = _interopRequireDefault(_welcomePopUp);

var _imageAtmosphere = require("./imageAtmosphere.routes");

var _imageAtmosphere2 = _interopRequireDefault(_imageAtmosphere);

var _faq = require("./faq.routes");

var _faq2 = _interopRequireDefault(_faq);

var _coursesOffered = require("./coursesOffered.routes");

var _coursesOffered2 = _interopRequireDefault(_coursesOffered);

var _expectedLearningOutcomes = require("./expectedLearningOutcomes.routes");

var _expectedLearningOutcomes2 = _interopRequireDefault(_expectedLearningOutcomes);

var _courseStructure = require("./courseStructure.routes");

var _courseStructure2 = _interopRequireDefault(_courseStructure);

var _structuralPlan = require("./structuralPlan.routes");

var _structuralPlan2 = _interopRequireDefault(_structuralPlan);

var _courseFormat = require("./courseFormat.routes");

var _courseFormat2 = _interopRequireDefault(_courseFormat);

var _article = require("./article.routes");

var _article2 = _interopRequireDefault(_article);

var _tag = require("./tag.routes");

var _tag2 = _interopRequireDefault(_tag);

var _subjectMajor = require("./subjectMajor.routes");

var _subjectMajor2 = _interopRequireDefault(_subjectMajor);

var _typeCours = require("./typeCours.routes");

var _typeCours2 = _interopRequireDefault(_typeCours);

var _subjectTypeCours = require("./subjectTypeCours.routes");

var _subjectTypeCours2 = _interopRequireDefault(_subjectTypeCours);

var _welcome_pop_ups = require("./welcome_pop_ups.routes");

var _welcome_pop_ups2 = _interopRequireDefault(_welcome_pop_ups);

var _priceCourse = require("./priceCourse.routes");

var _priceCourse2 = _interopRequireDefault(_priceCourse);

var _priceItems = require("./priceItems.routes");

var _priceItems2 = _interopRequireDefault(_priceItems);

var _review = require("./review.routes");

var _review2 = _interopRequireDefault(_review);

var _semester = require("./semester.routes");

var _semester2 = _interopRequireDefault(_semester);

var _studyDayTime = require("./studyDayTime.routes");

var _studyDayTime2 = _interopRequireDefault(_studyDayTime);

var _enroll = require("./enroll.routes");

var _enroll2 = _interopRequireDefault(_enroll);

var _fileDownloadStd = require("./fileDownloadStd.routes");

var _fileDownloadStd2 = _interopRequireDefault(_fileDownloadStd);

var _scholarshipType = require("./scholarshipType.routes");

var _scholarshipType2 = _interopRequireDefault(_scholarshipType);

var _atmosphere = require("./atmosphere.routes");

var _atmosphere2 = _interopRequireDefault(_atmosphere);

var _majorNew = require("./majorNew.routes");

var _majorNew2 = _interopRequireDefault(_majorNew);

var _subjectTypeNew = require("./subjectTypeNew.routes");

var _subjectTypeNew2 = _interopRequireDefault(_subjectTypeNew);

var _subjectStructure = require("./subjectStructure.routes");

var _subjectStructure2 = _interopRequireDefault(_subjectStructure);

var _studyFee = require("./studyFee.routes");

var _studyFee2 = _interopRequireDefault(_studyFee);

var _carlendar = require("./carlendar.routes");

var _carlendar2 = _interopRequireDefault(_carlendar);

var _calendarAcademic = require("./calendarAcademic.routes");

var _calendarAcademic2 = _interopRequireDefault(_calendarAcademic);

var _subjectMajorNew = require("./subjectMajorNew.routes");

var _subjectMajorNew2 = _interopRequireDefault(_subjectMajorNew);

var _subjectNewSubjectTypeNew = require("./subjectNewSubjectTypeNew.routes");

var _subjectNewSubjectTypeNew2 = _interopRequireDefault(_subjectNewSubjectTypeNew);

var _identity = require("./identity.routes");

var _identity2 = _interopRequireDefault(_identity);

var _videoLinkStudent = require("./videoLinkStudent.routes");

var _videoLinkStudent2 = _interopRequireDefault(_videoLinkStudent);

var _downloadFilesStudent = require("./downloadFilesStudent.routes");

var _downloadFilesStudent2 = _interopRequireDefault(_downloadFilesStudent);

var _serviceSystemStudent = require("./serviceSystemStudent.routes");

var _serviceSystemStudent2 = _interopRequireDefault(_serviceSystemStudent);

var _knowledgeTestAndQualificationExam = require("./knowledgeTestAndQualificationExam.routes");

var _knowledgeTestAndQualificationExam2 = _interopRequireDefault(_knowledgeTestAndQualificationExam);

var _groupInformation = require("./groupInformation.routes");

var _groupInformation2 = _interopRequireDefault(_groupInformation);

var _award = require("./award.routes");

var _award2 = _interopRequireDefault(_award);

var _file = require("./file.route");

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// เพิ่มมาใหม่
exports.default = function (app) {
  app.use("/atmospheres", _atmosphere2.default);

  app.use("/fileDownloadStds", _fileDownloadStd2.default);
  app.use("/scholarshipTypes", _scholarshipType2.default);

  app.use("/enrolls", _enroll2.default);

  app.use("/semesters", _semester2.default);
  app.use("/studyDayTimes", _studyDayTime2.default);

  app.use("/welcome_pop_ups", _welcome_pop_ups2.default);
  app.use("/reviews", _review2.default);

  app.use("/priceCourses", _priceCourse2.default);
  app.use("/priceItems", _priceItems2.default);

  app.use("/subjectMajors", _subjectMajor2.default);
  app.use("/typeCourses", _typeCours2.default);
  app.use("/subjectTypeCourses", _subjectTypeCours2.default);

  app.use("/articles", _article2.default);
  app.use("/tags", _tag2.default);
  app.use("/courseFormat", _courseFormat2.default);
  app.use("/structuralPlans", _structuralPlan2.default);
  app.use("/courseStructures", _courseStructure2.default);
  app.use("/faqs", _faq2.default);
  app.use("/expectedLearningOutcomes", _expectedLearningOutcomes2.default);
  app.use("/coursesOffereds", _coursesOffered2.default);

  app.use("/imageAtmospheres", _imageAtmosphere2.default);
  app.use("/welcomePops", _welcomePopUp2.default);

  app.use("/users", _user2.default);
  app.use("/banners", _banner2.default);
  app.use("/courses", _course2.default);
  app.use("/news", _new2.default);
  app.use("/studentComments", _studentComment2.default);

  app.use("/levels", _level2.default);
  app.use("/facualties", _facualty2.default);
  app.use("/c_configs", _c_config2.default);

  app.use("/academicConferences", _academicConference2.default);
  app.use("/academicJournals", _academicJournal2.default);
  app.use("/alumniArticles", _alumniArticles2.default);
  app.use("/annualReports", _annualReport2.default);
  app.use("/knowledgeLibraries", _knowledgeLibrary2.default);
  app.use("/majors", _major2.default);
  app.use("/successfulAlumnis", _successfulAlumni2.default);
  app.use("/thesisAndResearchs", _thesisAndResearch2.default);
  app.use("/mou", _mou2.default);

  app.use("/scholarships", _scholarship2.default);
  app.use("/knowledgeTests", _knowledgeTest2.default);
  app.use("/qualificationExams", _qualificationExam2.default);
  app.use("/studentWorks", _studentWork2.default);
  app.use("/teacherDetails", _teacherDetails2.default);

  // เพิ่มมาใหม่
  app.use("/majorNews", _majorNew2.default);
  app.use("/subjectTypeNews", _subjectTypeNew2.default);
  app.use("/subjectStructures", _subjectStructure2.default);
  app.use("/studyFees", _studyFee2.default);
  app.use("/carlendars", _carlendar2.default);
  app.use("/calendarAcademics", _calendarAcademic2.default);
  app.use("/subjectMajorNews", _subjectMajorNew2.default);
  app.use("/subjectNewSubjectTypeNews", _subjectNewSubjectTypeNew2.default);
  app.use("/videoLinkStudents", _videoLinkStudent2.default);
  app.use("/downloadFilesStudents", _downloadFilesStudent2.default);
  app.use("/serviceSystemStudents", _serviceSystemStudent2.default);
  app.use("/knowledgeTestAndQualificationExams", _knowledgeTestAndQualificationExam2.default);
  app.use("/groupInformations", _groupInformation2.default);
  app.use("/awards", _award2.default);

  app.use("/identitys", _identity2.default);
  app.use('/files', _file2.default);
};
//# sourceMappingURL=index.js.map