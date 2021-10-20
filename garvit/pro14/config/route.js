var express = require("express");
var route = express.Router();

route.use("/", require("../controllers/home"));
route.use("/about", require("../controllers/about"));
route.use("/contact", require("../controllers/contact"))



module.exports = route;