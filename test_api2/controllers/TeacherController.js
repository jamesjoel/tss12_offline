var express = require("express");
var routes = express.Router();
var mongoddb = require("mongodb");
var MongoClient = mongoddb.MongoClient;
var database = require("../config/database");
var collName = "teacher";

routes.get("/", (req, res)=>{
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find().toArray((err, result)=>{
            res.send(result);
        })
    })
})

routes.get("/:id", (req, res)=>{
    var _id = mongoddb.ObjectId(req.params.id);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find({ _id : _id }).toArray((err, result)=>{
            res.send(result);
        })
    })
})

routes.post("/", (req, res)=>{
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).insertOne(req.body, ()=>{
            res.send({ success : true });
        })
    })
})

module.exports = routes;