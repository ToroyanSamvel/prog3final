var LivingCreature = require("./class.LivingCreature.js");

module.exports = class Eatgrass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
        this.energy = 8;
        this.die1 = 0;
        this.arjeq = 10;
    }
    newDirections() {
        this.directions = [
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
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);


        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 2;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }



    eat() {
        var emptyCord = this.getDirections(1);

        var cord = random(emptyCord);


        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 2;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                    this.multiply++;
                    if (this.multiply == 5) {
                        this.mul();
                        this.die1 = 0;
                    }
                }

            }
        } else {
            this.move();
            this.die1++;
            if (this.die1 == 10) {
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
                var emptyCord = this.getDirections(5);
                if (emptyCord.length > 0) {
                    this.arjeq++;

                    if (this.arjeq == 0) {

                        this.die();
                        this.arjeq = 10;

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
            var eater = new Eatgrass(x, y, this.index);
            eatArr.push(eater);

            matrix[y][x] = 2;
            this.multiply = 0;
        }
    }


    die() {
        matrix[this.y][this.x] = 0;
        for (var i in eatArr) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);
            }
        }
    }
}