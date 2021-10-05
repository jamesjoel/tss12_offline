var express = require("express");
var app = express();

var MongoClient = require("mongodb").MongoClient;


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));


app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res)=>{
    res.render("home");
})
app.get("/about", (req, res)=>{
    res.render("about");
})
app.get("/contact", (req, res)=>{
    res.render("contact");
})
app.get("/student",(req, res)=>{
    res.render("student")
})
app.get("/Teachers",(req, res)=>{
    res.render("teachers")
})

app.post("/add" , (req,res)=>{
    var formdata =req.body;
MongoClient.connect("mongodb://localhost:27017",(err, con)=>{
    var db = con.db("task");
    db.collection("student").insertOne(formdata, ()=>{
        res.redirect("/");
    });
 });
})

var port = 3000;
app.listen(port, ()=>{
    console.log("server running");
})