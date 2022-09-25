const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){

res.sendFile(__dirname + "/index.html");

});

app.post("/",function(req,res){

var height = Number(req.body.height);
var weight = Number(req.body.weight);

var ans =  weight/(height*height);
res.send("Bmi is " + ans);
})

app.listen(3000,function(){
  console.log("Server is running on local host 3000.");
});
