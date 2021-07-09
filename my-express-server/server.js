const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("hello");
});

app.get("/about",function(req,res){
    res.send("I love baking")
});

app.get("/hobbies",function(req,res){
    res.send("<h1>I LOVE PHOTOGRAPHY</h1>")
});

app.listen(3000,function(){
    console.log("server started on port 3000");
});