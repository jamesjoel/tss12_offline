var express =require("express");

var demo = express();

console.log("hello")


demo.listen(3002, ()=>{
    console.log("server running");
})