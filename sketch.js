var value = 0;
function draw() {
  fill(value);
  rect(25, 25, 150, 150);
}
function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
/*
function deviceTurned() {
  if (value == 0){
    value = 255
  } else if (value == 255) {
    value = 0;
  }
}
*/
