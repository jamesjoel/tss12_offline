// require or call the express module
var express = require("express");

// call the "express()" constructor
var app = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{
    // res.sendFile(__dirname+"/index.html");
    res.render("index");
});
app.get("/about", (req, res)=>{
    // res.sendFile(__dirname+"/about.html");
    var a = "rohit"
    var b = "indore";
    var c = 25;

    var obj = { name : a, city : b, age : c};

    res.render("about", obj);
});

var port = 3000;
app.listen(port, ()=>{
    console.log("server running");
});
