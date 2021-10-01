var express =require("express");
var app = express();
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html");
})
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
})
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
})
app.get("/help", (req, res) => {
    res.sendFile(__dirname + "/help.html");
})

var port = 3000;
app.listen(port, ()=>{
    console.log("server running");
})