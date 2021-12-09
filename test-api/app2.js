var express = require("express");
var app = express();
var cors = require("cors");
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());


app.get("/api/comment", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss11");
        db.collection("comment").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})

// localhost:3000/api/comment/4/10
app.get("/api/comment/:skip/:limit", (req, res)=>{
    var skip = parseInt(req.params.skip);
    var limit = parseInt(req.params.limit);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss11");
        db.collection("comment").find().skip(skip).limit(limit).toArray((err, result)=>{
            res.send(result);
        })
    })
})






app.listen(3000, ()=>{
    console.log("server running");
})
