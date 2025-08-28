"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _models = require("./models");

var _models2 = _interopRequireDefault(_models);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

var _compression = require("compression");

var _compression2 = _interopRequireDefault(_compression);

var _expressFileupload = require("express-fileupload");

var _expressFileupload2 = _interopRequireDefault(_expressFileupload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import createError from "http-errors";
// import path from "path";

var app = (0, _express2.default)();

// var corsOptions = {
//   origin: 'http://localhost:8080'
// };
app.use((0, _cors2.default)());
app.use((0, _compression2.default)());

// parse requests of content-type - application/json
app.use(_bodyParser2.default.json({ limit: "10mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({ extended: true }));

_models2.default.sequelize.sync();

// simple route
app.get("/", function (req, res) {
  res.json({ message: "Gscm Service API !" });
});

app.use((0, _expressFileupload2.default)());

// app.use(express.static("public"));

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));

(0, _routes2.default)(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// // error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// set port, listen for requests
var PORT = process.env.PORT || 8081;
app.listen(PORT, function () {
  console.log("Server is running on port " + PORT + ".");
});
//# sourceMappingURL=index.js.map