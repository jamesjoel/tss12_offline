var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var database = require("../config/database");
var collName = "dishes";


routes.get("/", (req, res) => {
    MongoClient.connect(database.dbUrl, (err, con) => {
        var db = con.db(database.dbName);
        db.collection(collName).find().toArray((err, result) => {
            res.send(result);
        })
    })
})


routes.get("/:id", (req, res) => {
    var id = mongodb.ObjectId(req.params.id);
    MongoClient.connect(database.dbUrl, (err, con) => {
        var db = con.db(database.dbName);
        db.collection(collName).find({ _id: id }).toArray((err, result) => {
            res.send(result);
        })
    })
})


routes.post("/", (req, res) => {
    console.log(req.files);
    var obj = JSON.parse(req.body.formdata);
    console.log(obj);


    return;
    MongoClient.connect(database.dbUrl, (err, con) => {
        var db = con.db(database.dbName);
        db.collection(collName).insertOne(req.body, (err) => {
            res.send({ success: true });
        });
    })
})





module.exports = routes;