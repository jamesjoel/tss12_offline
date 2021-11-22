var express = require("express");
var app = express();
var cors = require("cors");
var sha1 = require("sha1");
var jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());

app.post("/api/user/checkusername", (req, res) => {
    if(req.body.username == "rohit@gmail.com")
    {
        res.status(401).send({ success : false});
        
    }
    else{
        res.status(400).send({ success : true});

    }
})





app.listen(3000, () => {
    console.log("server running");
})


/*
    localhost:3000/api/user/auth

    1. make sure your form input types name is
            username and password


*/