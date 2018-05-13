var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public/index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

var Grass = require("./classes/class.grass.js");
var Eatgrass = require("./classes/class.eatgrass.js");
var Wolf = require("./classes/class.wolf.js");
var Fire = require("./classes/class.fire.js");
var Water = require("./classes/class.water.js");