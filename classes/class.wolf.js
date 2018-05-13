var LivingCreature = require("./class.wolf.js");

 module.exports = class Wolf extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.naxkinvandakNum = 0;
        this.multiply = 0;
        this.die2 = 0;
        this.var = 0;
        this.arjeq = 10;
    }
    newDirections() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getDirections(t) {
        this.newDirections();
        return super.getDirections(t);
    }




    move() {
        var emptyCord0 = this.getDirections(0);
        var emptyCord1 = this.getDirections(1);
        var emptyCord = emptyCord1.concat(emptyCord0);


        var cord = random(emptyCord);


        if (cord) {

            var x = cord[0];
            var y = cord[1];



            matrix[this.y][this.x] = this.naxkinvandakNum;
            this.naxkinvandakNum = matrix[y][x];
            matrix[y][x] = 3;
            this.x = x;
            this.y = y;
        }
    }



    eat() {
        var emptyCord = this.getDirections(2);

        var cord = random(emptyCord);


        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            
            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                    this.multiply++;
                    if (this.multiply == 20) {
                        this.mul();
                        this.die2 = 0;
                    }


                    for (var i = 0; i < matrix.length; i++) {
                        for (var j = 0; j < matrix[i].length; j++) {
                            if (matrix[j][i] == 2) {
                                this.var++;
                                if (this.var == 5) {
                                    this.mul();
                                }
                            }


                        }

                    }
                }

            }
        } else {
            this.move();
            this.die2++;
            if (this.die2 == 20) {
                this.die();
            } else {
                var emptyCord = this.getDirections(4);
                if (emptyCord.length > 0) {
                    this.arjeq--;

                    if (this.arjeq == 0) {

                        this.die();
                        this.arjeq = 10;

                    }
                }
                else{
                	var emptyCord = this.getDirections(5);
                if (emptyCord.length > 0) {
                    this.die2++;

                    if (this.die2 == 0) {

                        this.die();
                        this.die2 = 20;

                    }
                }
                }
            }
        }



    }



    mul() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            var wolf1 = new Wolf(x, y, this.index);
            wolfArr.push(wolf1);

            matrix[y][x] = 3;
            this.multiply = 0;
        }
        //else{
        // for(var i = 0;i<matrix.length;i++)
        // 			{
        // 						for(var j = 0;j<matrix[i].length;j++)
        // 						{

        //   					   if(matrix[i][j] == 4 &&  0<this.arjeq)
        //   					   {
        //   					   		var emptyCord = this.getDirections(4);
        //                               this.arjeq--;
        //                               console.log(this.arjeq);    					   }
        // 						}
        // 						if(this.arjeq==0)
        // 						{
        // 							this.die();
        // 						}

        // 		}


        //}

    }
    die() {

        matrix[this.y][this.x] = 0;
        for (var i in wolfArr) {
            if (this.x == wolfArr[i].x && this.y == wolfArr[i].y) {
                wolfArr.splice(i, 1);
            }


        }
    }



}