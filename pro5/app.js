// require the "express" module
var abc = require("express");

// call that default function 
var demo = abc();

// console.log("hello");
// now we have to creaet our "virtual server" by listen() function
// demo.listen(3000);

    demo.listen(3000, ()=>{
        console.log("server running");
    })

// console.log(demo);

