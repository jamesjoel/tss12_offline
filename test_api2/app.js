var express = require("express");
var app = express();
var routes = require("./config/routes");
var cors = require("cors");

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.use(routes);


var port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port : ", port);
})