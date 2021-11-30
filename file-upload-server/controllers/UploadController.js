var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient =  mongodb.MongoClient;
var rand = require("randomstring");
var path = require("path");

routes.post("/", (req, res)=>{
    var formdata = JSON.parse(req.body.data) ;
    // console.log(formdata);
    // return;
    var image = req.files.image;
    
    var name = image.name;
    var arr = name.split(".");
    var ext = arr[arr.length - 1]; // getting last value of array
    var new_name = rand.generate(20)+"."+ext;
    
    var image_path = path.resolve()+"/assets/user_images/"+new_name;

    var obj = { image :  "/user_images/"+new_name, name : formdata.name };

    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss11");
        db.collection("uploads").insertOne(obj, ()=>{

            image.mv(image_path, (err)=>{
               res.send({ success : true });
            });
        })
    })


})


routes.get("/", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss11");
        db.collection("uploads").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})

module.exports = routes;
