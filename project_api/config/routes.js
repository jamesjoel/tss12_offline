var express = require("express");
var routes = express.Router();


routes.use("/api/menu", require("../controllers/menu"));
routes.use("/api/dish", require("../controllers/dishes"));
routes.use("/api/user", require("../controllers/user"));
routes.use("/api/user/auth", require("../controllers/userauth"));



module.exports = routes;