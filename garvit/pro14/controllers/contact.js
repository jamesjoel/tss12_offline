var express = require("express");
var route = express.Router();

route.get("/", (req, res)=>{
    res.render("contact");
})
route.get("/demo", (req, res)=>{
    res.render("demo");
})

module.exports = route;