var express = require("express");
var app = express();
var cors = require("cors");
var sha1 = require("sha1");
var jwt = require("jsonwebtoken");
var fileupload = require("express-fileupload");

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());
app.use(fileupload());

var userData = [
    {
        username : "rohit@gmail.com",
        password : sha1("123")
    },
    {
        username : "garvit@gmail.com",
        password : sha1("123")
    },
    {
        username : "ram@gmail.com",
        password : sha1("123")
    },
    {
        username : "vinita@gmail.com",
        password : sha1("123")
    },
    {
        username : "vaishnavi@gmail.com",
        password : sha1("123")
    }
    
]

app.post("/api/upload", (req, res)=>{
    // console.log(req.files);
    var file = req.files.img;
    file.mv(__dirname+"/assets/images/"+file.name, (err)=>{
        console.log("--------------");
    });
})

app.post("/api/user/auth", (req, res)=>{
    var u = req.body.username;
    var p = req.body.password;
    var check = false;
    for(var i=0; i < userData.length; i++)
    {
        if(userData[i].username == u)
        {
            check = true;
            break;
        }
        
    }

    if(check == false)
    {
        res.status(401).send({ success : false, type : 1});
    }
    else{
        if (userData[i].password == sha1(p))
        {
            var token = jwt.sign(userData[i], "hello world");
            res.status(200).send({ suceses : true , token : token });
        }
        else{
            res.status(401).send({ success : false, type : 2});

        }
    }



})





app.listen(3000, ()=>{
    console.log("server running");
})


/*

nodemon app1
    localhost:3000/api/user/auth

    1. make sure your form input types name is 
            username and password


*/