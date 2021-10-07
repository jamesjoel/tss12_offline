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
app.get("/employee", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss11");
        db.collection("employee").find().toArray((err, result)=>{
            // console.log(result);
            var pagedata = { result : result };
            res.render("employee", pagedata);
        });
    })
})

app.post("/add", (req, res)=>{
    // console.log(req.body);
    var formdata = req.body;
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss11");
        db.collection("employee").insertOne(formdata, ()=>{
            res.redirect("/employee");
        });
    });


})

app.get("/deleteall", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss11");
        db.collection("employee").deleteMany({}, ()=>{
            res.redirect("/employee");
        })
    })
})




var port = 3000;
app.listen(port, ()=>{
    console.log("server running");
})