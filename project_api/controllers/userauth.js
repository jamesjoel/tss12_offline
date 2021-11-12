var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var database = require("../config/database");
var collName = "user";

routes.post("/", (req, res)=>{
    // console.log(req.body);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find({ email : req.body.email }).toArray((err, result)=>{
            // console.log(result);
            if(result.length == 1) // email id is correct
            {

            }
            else
            {
                res.status(401).send({ success : false, type : 1});
            }
        })
    })
})



module.exports = routes;