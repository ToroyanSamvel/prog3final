var json_push_mlp = 0;
global.arr_obj = [];
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

///////////

app.set('port', process.env.PORT || 3000);
app.use(express.static("public"));
app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

//////////

server.listen(app.get('port'));

////varclasses////

var Grass = require("./classes/class.grass.js");
var Eatgrass = require("./classes/class.eatgrass.js");
var Wolf = require("./classes/class.wolf.js");
var Fire = require("./classes/class.fire.js");
var Water = require("./classes/class.water.js");


///var///

var x = 50;
var y = 50;
xotArr = [];
eatArr = [];
wolfArr = [];
fireArr = [];
waterArr = [];
matrix = [];
exanak = 'garun';
num = 0;

///


for (var i = 0; i < y; i++) {
    matrix[i] = [];
    for (var j = 0; j < x; j++) {
        matrix[i][j] = 0;
    }
}

///

var xotCount = x * y * 40 / 100;

for (var q = 0; q < xotCount; q++) {
    var xx = Math.floor(Math.random() * x);
    var yy = Math.floor(Math.random() * y);
    if (matrix[yy][xx] == 0) {
        matrix[yy][xx] = 1;
    }
    else {
        q--;
    }
}

///

var eatCount = x * y * 0.5 / 100;

for (var q = 0; q < eatCount; q++) {
    var xx = Math.floor(Math.random() * x);
    var yy = Math.floor(Math.random() * y);
    if (matrix[yy][xx] == 0) {
        matrix[yy][xx] = 2;
    }
    else {
        q--;
    }
}

///

var wolfCount = x * y * 0.5 / 100;

for (var q = 0; q < wolfCount; q++) {
    var xx = Math.floor(Math.random() * x);
    var yy = Math.floor(Math.random() * y);
    if (matrix[yy][xx] == 0) {
        matrix[yy][xx] = 3;
    }
    else {
        q--;
    }
}

///

var fireCount = x * y * 0.5 / 100;

for (var q = 0; q < fireCount; q++) {
    var xx = Math.floor(Math.random() * x);
    var yy = Math.floor(Math.random() * y);
    if (matrix[yy][xx] == 0) {
        matrix[yy][xx] = 4;
    }
    else {
        q--;
    }
}

///

var waterCount = x * y * 0.5 / 100;

for (var q = 0; q < waterCount; q++) {
    var xx = Math.floor(Math.random() * x);
    var yy = Math.floor(Math.random() * y);
    if (matrix[yy][xx] == 0) {
        matrix[yy][xx] = 5;
    }
    else {
        q--;
    }
}

///////////////////////////////////////////////////

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 1) {
            var xotik = new Grass(j, i, 1);
            xotArr.push(xotik);
        }
        else if (matrix[i][j] == 2) {
            var eatgrass = new Eatgrass(j, i, 2);
            eatArr.push(eatgrass);
        }
        else if (matrix[i][j] == 3) {
            var wolf1 = new Wolf(j, i, 3);
            wolfArr.push(wolf1);
        }
        else if (matrix[i][j] == 4) {
            var fire1 = new Fire(j, i, 4);
            fireArr.push(fire1);
        }
        else if (matrix[i][j] == 5) {
            var water1 = new Water(j, i, 5);
            waterArr.push(water1);
        }
    }
}

//Interval

setInterval(function () {
        for (var i in xotArr) {
            xotArr[i].mul();
        }
        for (var i in eatArr) {
            eatArr[i].eat();
        }
        for (var i in wolfArr) {
            wolfArr[i].eat();
        }
        
        
//exanak
        num++;
        if (num % 80 == 0) {
            exanak = 'garun';
        }
        else if (num % 80 == 20) {
            exanak = 'amar';
        }
        else if (num % 80 == 40) {
            exanak = 'ashun';
        }
        else if (num % 80 == 60) {
            exanak = 'dzmer';
        }

//static
        json_push_mlp++;
        if(json_push_mlp >= 10){
            var file = 'static.json';
            for(var i in arr_obj){
                fs.appendFileSync(file,JSON.stringify(arr_obj[i]) + '\n');
            }
            arr_obj = [];
        }
//io.sockets

        io.sockets.emit('matrix', matrix);
        io.sockets.emit('exanak', exanak);

    }, 1000);


io.on('connection', function (socket) {});





