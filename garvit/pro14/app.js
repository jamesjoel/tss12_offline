var express = require("express");
var app = express();
var route = require("./config/route");

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/assets"));

app.use(express.json());
app.use(express.urlencoded());

app.use(route);

app.listen(3000, ()=>{
    console.log("server running");
})