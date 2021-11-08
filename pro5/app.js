
var express = require("express");
var app = express();

console.log("hello --------------");
app.listen(3000, ()=>{
    console.log("server running");
});
// console.log("welcome");

MongoClient.connect("", (err, con)=>{
    db = con.db("");
    db.coll().find().toArray((err, result)=>{
        console.log(result);
    })
})
res.render();




