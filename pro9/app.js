var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{
    var a = "rohit";
    var obj = { name : a};

    res.render("home", obj);
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/contact", (req, res) => {
    var color = ["red", "green", "blue", "yellow", "pink", "blakc", "white", "gray", "dark-red"];
    var obj = { color : color };

    res.render("contact", obj);
});


var port = 3000;
app.listen(port, ()=>{
    console.log("Server running");
})