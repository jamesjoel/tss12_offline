var express = require("express");
var routes = express.Router();


routes.use("/api/employee", require("../controllers/employee"));
routes.use("/api/student", require("../controllers/student"));

module.exports = routes;