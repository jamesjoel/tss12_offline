
var abc = require("express");
var demo = abc();
demo.listen(3001, () => {
    console.log("server running");
})

