var express = require("express");
var app = express();
var cors = require("cors");
var upload = require("express-fileupload");
var routes = require("./config/routes");

app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(upload());

app.use(routes);



app.listen(3000, ()=>{
    console.log("server running");
})