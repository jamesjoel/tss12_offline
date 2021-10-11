var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    res.render("about");
})
routes.get("/info", (req, res) => {
    res.render("info");
})

routes.get("/info/more", (req, res) => {
    res.render("more");
})

routes.post("/save", (req, res)=>{
    console.log(req.body);
})


module.exports = routes;