var LivingCreature = require("./class.LivingCreature.js");

module.exports = class Grass extends LivingCreature {

    mul() {
        if (exanak != 'dzmer') {
            this.multiply++;
            if (this.multiply == 6) {
                var emptyCord = this.getDirections(0);
                var ind = Math.floor(Math.random() * emptyCord.length) // js
                var cord = emptyCord[ind];
                if (cord) {

                    var x = cord[0];
                    var y = cord[1];

                    var norXot = new Grass(x, y, this.index);
                    xotArr.push(norXot);

                    matrix[y][x] = 1;
                    this.multiply = 0;
                }
            }
        }

    }
}