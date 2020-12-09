/*
pattern_v1
Generative Landscape
https://editor.p5js.org/owenroberts/sketches/ELfjvaock
*/

// https://p5js.org/zh-Hans/examples/form-star.html

var r = 237, g = 224, b = 52;
var speed = 2;

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background('skyblue');

  noStroke()
  fill('#5DAF32');
  triangle(0,400,140,152,280,400);
  
  noStroke()
  fill(245,248,240);
quad(100,220,140,150,180,220,140,190);

noStroke()
  fill('#5DAF32');
  triangle(300,400,440,152,580,400);
  
  noStroke()
  fill(245,248,240);
quad(400,220,440,150,480,220,440,190);
  
noStroke();
fill('white')
  
  ellipse(250,50,60,50);
  ellipse(280,40,60,50);
  ellipse(330,50,60,50);
  ellipse(270,70,60,50);
  ellipse(310,65,60,50);

  fill(r, g, b);
  star(50, 50, 42, 20, 5);
  
  r += speed;
  g += speed;
  b += speed;
  
  if (g > 255 || g < 224) {
    speed *= -1;
  }

   fill(r, g, b);
  star(150, 50, 42, 20, 5);
  
  r += speed;
  g += speed;
  b += speed;
  
  if (g > 255 || g < 224) {
    speed *= -1;
  }

   fill(r, g, b);
  star(450, 50, 42, 20, 5);
  
  r += speed;
  g += speed;
  b += speed;
  
  if (g > 255 || g < 224) {
    speed *= -1;
  }
  

   fill(r, g, b);
  star(550, 50, 42, 20, 5);
  
  r += speed;
  g += speed;
  b += speed;
  
  if (g > 255 || g < 224) {
    speed *= -1;
  }

}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = -1; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}