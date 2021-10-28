var express = require("express");
var routes = express.Router();


routes.use("/api/menu", require("../controllers/menu"));
routes.use("/api/dishes", require("../controllers/dishes"));

module.exports = routes;