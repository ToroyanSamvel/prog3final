
var side = 15;
var x = 50;
var y = 50;

function setup() {
  frameRate(2);
  createCanvas(x * side, y * side);
  background('#acacac');
}



function gcel(matrix) {
  background('#acacac');

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 1) {
        fill("green");
        rect(j * side, i * side, side, side);
      }
      else if (matrix[i][j] == 2) {
        fill("yellow");
        rect(j * side, i * side, side, side);
      }
      else if (matrix[i][j] == 3) {
        fill("black");
        rect(j * side, i * side, side, side);
      }

      else if (matrix[i][j] == 4) {
        fill("red");
        rect(j * side, i * side, side, side, 100);
      }
      else if (matrix[i][j] == 5) {
        fill("DodgerBlue");
        rect(j * side, i * side, side, side, 100);
      }
      else if (matrix[i][j] == 0) {
        fill('#acacac');
        rect(j * side, i * side, side, side);
      }
    }
  }
}