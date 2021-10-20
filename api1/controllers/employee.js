var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;


// localhost:3000/api/employee
routes.get("/", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss11");
        db.collection("employee").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})

module.exports = routes;