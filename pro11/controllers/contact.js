var express = require("express");
var routes = express.Router();


routes.get("/", (req, res)=>{
    res.render("contact");
})
routes.get("/demo", (req, res)=>{
    res.render("demo")
})

module.exports = routes;