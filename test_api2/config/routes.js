var express = require("express");
var routes = express.Router();

// :3000/api/teacher/

routes.use("/api/teacher", (require("../controllers/TeacherController")));

module.exports = routes;