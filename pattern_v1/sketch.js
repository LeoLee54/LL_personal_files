/*
pattern_v1
Generative Landscape
https://editor.p5js.org/owenroberts/sketches/ELfjvaock
*/

// https://p5js.org/zh-Hans/examples/form-star.html

var r = 255, g = 240, b = 180;
var speed = 1;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  
  fill(r, g, b);
  star(200, 200, 40, 100, 5);
  
  r += speed;
  g += speed;
  b += speed;
  
  if (g > 255 || g < 240) {
    speed *= -1;
  }
  
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 1; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}