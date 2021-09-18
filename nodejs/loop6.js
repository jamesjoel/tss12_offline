var data = [
    {
        name : "rohit",
        age : 25,
        city : ["indore", "mumbai", "pune"]
    },
    {
        name : "jaya",
        age : 21,
        city : ["bhopal", "delhi", "ujjain"]
    }
];

data.forEach(function(x){
   x.city.forEach(function(y){
       console.log(y);
   })
   console.log("---------");
})