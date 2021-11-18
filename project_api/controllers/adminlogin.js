var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var database = require("../config/database");
var collName = "admin";
var sha1 = require("sha1");
var jwt = require("jsonwebtoken");


routes.post("/auth", (req, res)=>{
    // console.log(req.body);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);

        db.collection(collName).find({ username : req.body.username }).toArray((err, result)=>{
            // console.log(result);
            if(result.length==1)
            {
                if(result[0].password == sha1(req.body.password))
                {
                    var token = jwt.sign(result[0], "this is admin panel");
                    res.status(200).send({ token : token });
                }
                else
                {

                    res.status(401).send({ success : false, type : 2});
                }
            }
            else{
                res.status(401).send({ success : false, type : 1});
            }
        })
    })
})

module.exports = routes;