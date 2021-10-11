var express = require("express");

var route = express.Router();

route.get("/", (req, res)=>{
    res.render("about");
})

route.get("/more", (req, res) => {
    res.render("more")
})


route.get("/info", (req, res) => {
    res.render("info");
})

module.exports = route;