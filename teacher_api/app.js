var express = require("express");
var app = express();
var cors = require("cors");
var routes = require("./config/routes");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use(routes);

app.listen(3000, ()=>{
    console.log("server run");
})