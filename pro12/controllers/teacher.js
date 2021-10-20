var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var dbUrl = "mongodb://localhost:27017";
var dbName = "tss11";
var collName = "teacher";

routes.get("/", (req, res)=>{
    MongoClient.connect(dbUrl, (err, con)=>{
        if(err){
            console.log("connection error", err);
            return;
        }
        var db = con.db(dbName);
        db.collection(collName).find().toArray((err, result)=>{
            var pagedata = { result : result };
            res.render("teacher", pagedata);
        })

    })
})

routes.post("/add", (req, res)=>{
    // console.log(req.body);
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).insertOne(req.body, ()=>{
            res.redirect("/teacher");
        })
    })
})

routes.get("/deleteall", (req, res)=>{
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).deleteMany({}, ()=>{
            res.redirect("/teacher");
        })
    })
})

routes.get("/delete/:id", (req, res) => {

    var objid = mongodb.ObjectId(req.params.id);

    MongoClient.connect(dbUrl, (err, con) => {
        var db = con.db(dbName);
        db.collection(collName).deleteMany({ _id : objid }, () => {
            res.redirect("/teacher");
        })
    })
})

routes.get("/edit/:id", (req, res) => {

    var objid = mongodb.ObjectId(req.params.id);

    MongoClient.connect(dbUrl, (err, con) => {
        var db = con.db(dbName);
        db.collection(collName).find({ _id : objid }).toArray((err, result) => {
            var pagedata = { result: result[0] };
            res.render("edit_teacher", pagedata);
        })

    })
})

routes.post("/update/:id", (req, res)=>{

    var objid = mongodb.ObjectId(req.params.id);

    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).updateMany({ _id : objid }, { $set : req.body }, ()=>{
            res.redirect("/teacher");
        })
    })
})







module.exports = routes;