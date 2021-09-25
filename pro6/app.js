var express = require("express");
var app = express();

// localhost:3000/about
app.get("/about", (req, res)=>{
    // res.send("This is ABOUT PAGE"); 
    res.sendFile(__dirname+"/about.html");
});

app.get("/contact", (req, res)=>{
    res.sendFile(__dirname + "/contact.html");
    
})

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/home.html");

})


// console.log(__dirname);

app.listen(3000, ()=>{
    console.log("server running");
})