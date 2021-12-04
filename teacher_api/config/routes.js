var express = require("express");
var routes = express.Router();


routes.use("/api/teacher", require("../controllers/TeacherController"));

module.exports = routes;