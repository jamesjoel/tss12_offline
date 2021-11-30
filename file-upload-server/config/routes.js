var express = require("express");
var routes = express.Router();


routes.use("/api/upload", (require("../controllers/UploadController")));

module.exports = routes;