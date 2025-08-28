"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require("../config/db");

var _db2 = _interopRequireDefault(_db);

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _associations = require("./associations");

var _associations2 = _interopRequireDefault(_associations);

var _user = require("./user.model");

var _user2 = _interopRequireDefault(_user);

var _banner = require("./banner.model");

var _banner2 = _interopRequireDefault(_banner);

var _course = require("./course.model");

var _course2 = _interopRequireDefault(_course);

var _studentComment = require("./studentComment.model");

var _studentComment2 = _interopRequireDefault(_studentComment);

var _new = require("./new.model");

var _new2 = _interopRequireDefault(_new);

var _facualty = require("./facualty.model");

var _facualty2 = _interopRequireDefault(_facualty);

var _level = require("./level.model");

var _level2 = _interopRequireDefault(_level);

var _c_config = require("./c_config.model");

var _c_config2 = _interopRequireDefault(_c_config);

var _mou = require("./mou.model");

var _mou2 = _interopRequireDefault(_mou);

var _alumniArticles = require("./alumniArticles.model");

var _alumniArticles2 = _interopRequireDefault(_alumniArticles);

var _major = require("./major.model");

var _major2 = _interopRequireDefault(_major);

var _successfulAlumni = require("./successfulAlumni.model");

var _successfulAlumni2 = _interopRequireDefault(_successfulAlumni);

var _thesisAndResearch = require("./thesisAndResearch.model");

var _thesisAndResearch2 = _interopRequireDefault(_thesisAndResearch);

var _academicJournal = require("./academicJournal.model");

var _academicJournal2 = _interopRequireDefault(_academicJournal);

var _academicConference = require("./academicConference.model");

var _academicConference2 = _interopRequireDefault(_academicConference);

var _annualReport = require("./annualReport.model");

var _annualReport2 = _interopRequireDefault(_annualReport);

var _knowledgeLibrary = require("./knowledgeLibrary.model");

var _knowledgeLibrary2 = _interopRequireDefault(_knowledgeLibrary);

var _scholarship = require("./scholarship.model");

var _scholarship2 = _interopRequireDefault(_scholarship);

var _knowledgeTest = require("./knowledgeTest.model");

var _knowledgeTest2 = _interopRequireDefault(_knowledgeTest);

var _qualificationExam = require("./qualificationExam.model");

var _qualificationExam2 = _interopRequireDefault(_qualificationExam);

var _studentWork = require("./studentWork.model");

var _studentWork2 = _interopRequireDefault(_studentWork);

var _teacherDetails = require("./teacherDetails.model");

var _teacherDetails2 = _interopRequireDefault(_teacherDetails);

var _imageAtmosphere = require("./imageAtmosphere.model");

var _imageAtmosphere2 = _interopRequireDefault(_imageAtmosphere);

var _welcomePopUp = require("./welcomePopUp.model");

var _welcomePopUp2 = _interopRequireDefault(_welcomePopUp);

var _faq = require("./faq.model");

var _faq2 = _interopRequireDefault(_faq);

var _courseStructure = require("./courseStructure.model");

var _courseStructure2 = _interopRequireDefault(_courseStructure);

var _coursesOffered = require("./coursesOffered.model");

var _coursesOffered2 = _interopRequireDefault(_coursesOffered);

var _expectedLearningOutcomes = require("./expectedLearningOutcomes.model");

var _expectedLearningOutcomes2 = _interopRequireDefault(_expectedLearningOutcomes);

var _courseFormat = require("./courseFormat.model");

var _courseFormat2 = _interopRequireDefault(_courseFormat);

var _article = require("./article.model");

var _article2 = _interopRequireDefault(_article);

var _tag = require("./tag.model");

var _tag2 = _interopRequireDefault(_tag);

var _subjectMajor = require("./subjectMajor.model");

var _subjectMajor2 = _interopRequireDefault(_subjectMajor);

var _subjectTypeCours = require("./subjectTypeCours.model");

var _subjectTypeCours2 = _interopRequireDefault(_subjectTypeCours);

var _typeCourse = require("./typeCourse.model");

var _typeCourse2 = _interopRequireDefault(_typeCourse);

var _subCoursesOffered = require("./subCoursesOffered.model");

var _subCoursesOffered2 = _interopRequireDefault(_subCoursesOffered);

var _priceCourse = require("./priceCourse.model");

var _priceCourse2 = _interopRequireDefault(_priceCourse);

var _priceItems = require("./priceItems.model");

var _priceItems2 = _interopRequireDefault(_priceItems);

var _review = require("./review.model");

var _review2 = _interopRequireDefault(_review);

var _semester = require("./semester.model");

var _semester2 = _interopRequireDefault(_semester);

var _studyDayTime = require("./studyDayTime.model");

var _studyDayTime2 = _interopRequireDefault(_studyDayTime);

var _enroll = require("./enroll.model");

var _enroll2 = _interopRequireDefault(_enroll);

var _fileDownloadStd = require("./fileDownloadStd.model");

var _fileDownloadStd2 = _interopRequireDefault(_fileDownloadStd);

var _scholarshipType = require("./scholarshipType.model");

var _scholarshipType2 = _interopRequireDefault(_scholarshipType);

var _atmosphere = require("./atmosphere.model");

var _atmosphere2 = _interopRequireDefault(_atmosphere);

var _imageEnrollAnnounce = require("./imageEnrollAnnounce.model");

var _imageEnrollAnnounce2 = _interopRequireDefault(_imageEnrollAnnounce);

var _imageEnrollRegister = require("./imageEnrollRegister.model");

var _imageEnrollRegister2 = _interopRequireDefault(_imageEnrollRegister);

var _documentScholarship = require("./documentScholarship.model");

var _documentScholarship2 = _interopRequireDefault(_documentScholarship);

var _documentScholarshipType = require("./documentScholarshipType.model");

var _documentScholarshipType2 = _interopRequireDefault(_documentScholarshipType);

var _documentAcademicJournal = require("./documentAcademicJournal.model");

var _documentAcademicJournal2 = _interopRequireDefault(_documentAcademicJournal);

var _majorNew = require("./majorNew.model");

var _majorNew2 = _interopRequireDefault(_majorNew);

var _subjectTypeNew = require("./subjectTypeNew.model");

var _subjectTypeNew2 = _interopRequireDefault(_subjectTypeNew);

var _subjectStructure = require("./subjectStructure.model");

var _subjectStructure2 = _interopRequireDefault(_subjectStructure);

var _studyFee = require("./studyFee.model");

var _studyFee2 = _interopRequireDefault(_studyFee);

var _carlendar = require("./carlendar.model");

var _carlendar2 = _interopRequireDefault(_carlendar);

var _subjectMajorNew = require("./subjectMajorNew.model");

var _subjectMajorNew2 = _interopRequireDefault(_subjectMajorNew);

var _subjectNewSubjectTypeNew = require("./subjectNewSubjectTypeNew.model");

var _subjectNewSubjectTypeNew2 = _interopRequireDefault(_subjectNewSubjectTypeNew);

var _identity = require("./identity.model");

var _identity2 = _interopRequireDefault(_identity);

var _videoLinkStudent = require("./videoLinkStudent.model");

var _videoLinkStudent2 = _interopRequireDefault(_videoLinkStudent);

var _downloadFilesStudent = require("./downloadFilesStudent.model");

var _downloadFilesStudent2 = _interopRequireDefault(_downloadFilesStudent);

var _serviceSystemStudent = require("./serviceSystemStudent.model");

var _serviceSystemStudent2 = _interopRequireDefault(_serviceSystemStudent);

var _knowledgeTestAndQualificationExam = require("./knowledgeTestAndQualificationExam.model");

var _knowledgeTestAndQualificationExam2 = _interopRequireDefault(_knowledgeTestAndQualificationExam);

var _groupInformation = require("./groupInformation.model");

var _groupInformation2 = _interopRequireDefault(_groupInformation);

var _award = require("./award.model");

var _award2 = _interopRequireDefault(_award);

var _calendarAcademic = require("./calendarAcademic.model");

var _calendarAcademic2 = _interopRequireDefault(_calendarAcademic);

var _file = require("./file.model");

var _file2 = _interopRequireDefault(_file);

var _fileAward = require("./fileAward.model");

var _fileAward2 = _interopRequireDefault(_fileAward);

var _knowledgeFile = require("./knowledgeFile.model");

var _knowledgeFile2 = _interopRequireDefault(_knowledgeFile);

var _anualReportFile = require("./anualReportFile.model");

var _anualReportFile2 = _interopRequireDefault(_anualReportFile);

var _newsFile = require("./newsFile.model");

var _newsFile2 = _interopRequireDefault(_newsFile);

var _newsDocumentFile = require("./newsDocumentFile.model");

var _newsDocumentFile2 = _interopRequireDefault(_newsDocumentFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = new _sequelize2.default(_db2.default.DB, _db2.default.USER, _db2.default.PASSWORD, {
  host: _db2.default.HOST,
  dialect: _db2.default.dialect,
  operatorsAliases: 0,
  pool: {
    max: _db2.default.pool.max,
    min: _db2.default.pool.min,
    acquire: _db2.default.pool.acquire,
    idle: _db2.default.idle
  }
});

// เพิ่มมาใหม่


var db = {};

db.Sequelize = _sequelize2.default;
db.sequelize = sequelize;

db.Atmosphere = (0, _atmosphere2.default)(sequelize, _sequelize2.default);

db.ScholarshipType = (0, _scholarshipType2.default)(sequelize, _sequelize2.default);

db.FileDownloadStd = (0, _fileDownloadStd2.default)(sequelize, _sequelize2.default);

db.Enroll = (0, _enroll2.default)(sequelize, _sequelize2.default);

db.Semester = (0, _semester2.default)(sequelize, _sequelize2.default);
db.StudyDayTime = (0, _studyDayTime2.default)(sequelize, _sequelize2.default);

db.PriceCourse = (0, _priceCourse2.default)(sequelize, _sequelize2.default);
db.Review = (0, _review2.default)(sequelize, _sequelize2.default);

db.PriceItem = (0, _priceItems2.default)(sequelize, _sequelize2.default);

db.SubCoursesOffered = (0, _subCoursesOffered2.default)(sequelize, _sequelize2.default);

db.TypeCourse = (0, _typeCourse2.default)(sequelize, _sequelize2.default);

db.SubjectMajor = (0, _subjectMajor2.default)(sequelize, _sequelize2.default);

db.SubjectTypeCourse = (0, _subjectTypeCours2.default)(sequelize, _sequelize2.default);

db.Article = (0, _article2.default)(sequelize, _sequelize2.default);
db.Tag = (0, _tag2.default)(sequelize, _sequelize2.default);
db.CourseFormat = (0, _courseFormat2.default)(sequelize, _sequelize2.default);

db.Identity = (0, _identity2.default)(sequelize, _sequelize2.default);

db.ExpectedLearningOutcomes = (0, _expectedLearningOutcomes2.default)(sequelize, _sequelize2.default);
db.Coursesoffered = (0, _coursesOffered2.default)(sequelize, _sequelize2.default);
db.CourseStructure = (0, _courseStructure2.default)(sequelize, _sequelize2.default);
db.FAQ = (0, _faq2.default)(sequelize, _sequelize2.default);

db.ImageAtmosphere = (0, _imageAtmosphere2.default)(sequelize, _sequelize2.default);

db.WelcomePopUp = (0, _welcomePopUp2.default)(sequelize, _sequelize2.default);

db.StudentWork = (0, _studentWork2.default)(sequelize, _sequelize2.default);
db.KnowledgeLibrary = (0, _knowledgeLibrary2.default)(sequelize, _sequelize2.default);
db.AnnualReport = (0, _annualReport2.default)(sequelize, _sequelize2.default);
db.AcademicConference = (0, _academicConference2.default)(sequelize, _sequelize2.default);
db.AcademicJournal = (0, _academicJournal2.default)(sequelize, _sequelize2.default);
db.ThesisAndResearch = (0, _thesisAndResearch2.default)(sequelize, _sequelize2.default);
db.SuccessfulAlumni = (0, _successfulAlumni2.default)(sequelize, _sequelize2.default);
db.Major = (0, _major2.default)(sequelize, _sequelize2.default);
db.MOU = (0, _mou2.default)(sequelize, _sequelize2.default);
db.AlumniArticles = (0, _alumniArticles2.default)(sequelize, _sequelize2.default);
db.C_config = (0, _c_config2.default)(sequelize, _sequelize2.default);
db.User = (0, _user2.default)(sequelize, _sequelize2.default);
db.Banner = (0, _banner2.default)(sequelize, _sequelize2.default);
db.Course = (0, _course2.default)(sequelize, _sequelize2.default);
db.New = (0, _new2.default)(sequelize, _sequelize2.default);
db.StudentComment = (0, _studentComment2.default)(sequelize, _sequelize2.default);
db.Facualty = (0, _facualty2.default)(sequelize, _sequelize2.default);
db.Level = (0, _level2.default)(sequelize, _sequelize2.default);
db.Scholarship = (0, _scholarship2.default)(sequelize, _sequelize2.default);
db.KnowledgeTest = (0, _knowledgeTest2.default)(sequelize, _sequelize2.default);
db.QualificationExam = (0, _qualificationExam2.default)(sequelize, _sequelize2.default);
db.TeacherDetail = (0, _teacherDetails2.default)(sequelize, _sequelize2.default);

db.ImageEnrollAnnounce = (0, _imageEnrollAnnounce2.default)(sequelize, _sequelize2.default);
db.ImageEnrollRegister = (0, _imageEnrollRegister2.default)(sequelize, _sequelize2.default);

// เพิ่มมาใหม่
db.MajorNew = (0, _majorNew2.default)(sequelize, _sequelize2.default);
db.SubjectTypeNew = (0, _subjectTypeNew2.default)(sequelize, _sequelize2.default);
db.SubjectStructure = (0, _subjectStructure2.default)(sequelize, _sequelize2.default);
db.StudyFee = (0, _studyFee2.default)(sequelize, _sequelize2.default);
db.Carlendar = (0, _carlendar2.default)(sequelize, _sequelize2.default);
db.SubjectMajorNew = (0, _subjectMajorNew2.default)(sequelize, _sequelize2.default);
db.SubjectNewSubjectTypeNew = (0, _subjectNewSubjectTypeNew2.default)(sequelize, _sequelize2.default);
db.VideoLinkStudent = (0, _videoLinkStudent2.default)(sequelize, _sequelize2.default);
db.DownloadFilesStudent = (0, _downloadFilesStudent2.default)(sequelize, _sequelize2.default);
db.ServiceSystemStudent = (0, _serviceSystemStudent2.default)(sequelize, _sequelize2.default);
db.KnowledgeTestAndQualificationExam = (0, _knowledgeTestAndQualificationExam2.default)(sequelize, _sequelize2.default);
db.GroupInformation = (0, _groupInformation2.default)(sequelize, _sequelize2.default);
db.Award = (0, _award2.default)(sequelize, _sequelize2.default);
db.CalendarAcademic = (0, _calendarAcademic2.default)(sequelize, _sequelize2.default);

db.File = (0, _file2.default)(sequelize, _sequelize2.default);
db.fileAward = (0, _fileAward2.default)(sequelize, _sequelize2.default);

db.Award.hasMany(db.fileAward);
db.fileAward.belongsTo(db.Award);

db.Enroll.hasMany(db.ImageEnrollAnnounce);
db.ImageEnrollAnnounce.belongsTo(db.Enroll);

db.Enroll.hasMany(db.ImageEnrollRegister);
db.ImageEnrollRegister.belongsTo(db.Enroll);

db.DocumentScholarship = (0, _documentScholarship2.default)(sequelize, _sequelize2.default);
db.DocumentScholarshipType = (0, _documentScholarshipType2.default)(sequelize, _sequelize2.default);
db.DocumentAcademicJournal = (0, _documentAcademicJournal2.default)(sequelize, _sequelize2.default);
db.KnowledgeFile = (0, _knowledgeFile2.default)(sequelize, _sequelize2.default);
db.AnualReportFile = (0, _anualReportFile2.default)(sequelize, _sequelize2.default);

db.NewsFile = (0, _newsFile2.default)(sequelize, _sequelize2.default);
db.NewsDocumentFile = (0, _newsDocumentFile2.default)(sequelize, _sequelize2.default);

db.Scholarship.hasMany(db.DocumentScholarship);
db.DocumentScholarship.belongsTo(db.Scholarship);

db.ScholarshipType.hasMany(db.DocumentScholarshipType);
db.DocumentScholarshipType.belongsTo(db.ScholarshipType);

db.AcademicJournal.hasMany(db.DocumentAcademicJournal);
db.DocumentAcademicJournal.belongsTo(db.AcademicJournal);

// เพิ่มมาใหม่
db.Course.hasMany(db.MajorNew);
db.MajorNew.belongsTo(db.Course);

db.Course.hasMany(db.SubjectTypeNew);
db.SubjectTypeNew.belongsTo(db.Course);

db.Course.hasMany(db.SubjectStructure);
db.SubjectStructure.belongsTo(db.Course);

db.Course.hasMany(db.StudyFee);
db.StudyFee.belongsTo(db.Course);

// db.TypeCourse.hasMany(db.StudyFee);
// db.StudyFee.belongsTo(db.TypeCourse);

db.MajorNew.hasMany(db.SubjectMajorNew);
db.SubjectMajorNew.belongsTo(db.MajorNew);

db.Coursesoffered.hasMany(db.SubjectMajorNew);
db.SubjectMajorNew.belongsTo(db.Coursesoffered);

db.SubjectTypeNew.hasMany(db.SubjectNewSubjectTypeNew);
db.SubjectNewSubjectTypeNew.belongsTo(db.SubjectTypeNew);

db.KnowledgeTestAndQualificationExam.hasMany(db.KnowledgeFile);
db.KnowledgeFile.belongsTo(db.KnowledgeTestAndQualificationExam);

db.AnnualReport.hasMany(db.AnualReportFile);
db.AnualReportFile.belongsTo(db.AnnualReport);

db.New.hasMany(db.NewsFile);
db.NewsFile.belongsTo(db.New);

db.New.hasMany(db.NewsDocumentFile);
db.NewsDocumentFile.belongsTo(db.New);

// setting table relationship
(0, _associations2.default)(db);

exports.default = db;
//# sourceMappingURL=index.js.map