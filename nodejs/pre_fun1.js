var date = new Date();
var h = date.getHours();
// var h = 3;

if(h>=6 && h<=12)
{
    console.log("good mornig");
}
else if(h>12 && h<=18)
{
    console.log("good after-noon");
}
else if(h>18 && h<=22){
    console.log("good evening");
}
else{
    console.log("good night");
}