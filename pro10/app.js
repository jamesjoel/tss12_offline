var express = require("express");
var app = express();

var MongoClient = require("mongodb").MongoClient;

var mongodb = require("mongodb");


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.use(express.json());
app.use(express.urlencoded());


app.get("/", (req, res)=>{
    // console.log("welcome");
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
    // return;
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


app.get("/delete/:a", (req, res)=>{
    // console.log(req.params.a);
    var x = req.params.a; // 61502454
    // console.log(x);
    var y = mongodb.ObjectId(x); // ObjectId(61502454)

    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss11");
        db.collection("employee").deleteMany({ _id : y }, ()=>{
            res.redirect("/employee");
        })
    })
})


app.get("/view/:a", (req, res)=>{
    var x = req.params.a;
    var y = mongodb.ObjectId(x);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss11");
        db.collection("employee").find({ _id : y}).toArray((err, result)=>{
            // console.log(result);
            var pagedata = { result : result[0] };
            res.render("view_employee", pagedata);

        })
    })

})


app.get("/edit/:a", (req, res)=>{
    var x = mongodb.ObjectId(req.params.a);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss11");
        db.collection("employee").find({ _id : x }).toArray((err, result)=>{
            var pagedata = { result : result[0] };
            res.render("edit_employee", pagedata);
        })
    })


})


app.post("/update/:a", (req, res)=>{
    // console.log(req.body);
    var x = mongodb.ObjectId(req.params.a);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss11");
        db.collection("employee").updateMany({_id : x}, { $set : req.body }, ()=>{
            res.redirect("/employee");
        })
    })
})

var port = 3000;
app.listen(port, ()=>{
    console.log("server running");
})