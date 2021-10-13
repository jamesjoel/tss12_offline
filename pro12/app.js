var express = require("express");
var app = express();
var routes = require("./config/routes");


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.use(express.json());
app.use(express.urlencoded());

app.use(routes);
// app.use(require("./config/routes"));


var port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log("server running");
})