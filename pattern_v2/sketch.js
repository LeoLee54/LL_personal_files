/*
pattern_v2
Generative pattern
*/

function setup() {
  createCanvas(640, 460)
}

function draw() {
  background("gray");
  for (var i = 0; i <= 15; i++) {
    for (var j = 0; j <= 15; j++) {
      catHead(20 + (40 * i), 34 + (50 * j));
    }
  }
}

function catHead(x, y) {
  if (mouseIsPressed) {
    noStroke();
    fill(random(255), random(255), random(255));
    ellipse(x, y, 30, 30);
    triangle(x - 12, y - 25, x - 15, y, x - 2, y - 15);
    triangle(x + 12, y - 25, x + 15, y, x + 2, y - 15);
    fill(255);
    ellipse(x - 5, y - 3, 6, 6);
    ellipse(x + 5, y - 3, 6, 6);
  } else {
      noStroke();
    fill(random(255), random(255), random(255));
    ellipse(x, y, 30, 30);
  }
}