/*
pattern_v2
Generative pattern
*/

function setup() {
  createCanvas(640, 460);
  pattern();
}

function mousePressed() {
  pattern();
}

function pattern() {
  background("snowwhite");

  let w = random(20, 50);
  let h = w;
  let horizon = random(height/2, height + w);

  for (let x = 0; x <= width + w; x += w) { // columns
    for (let y = 0; y <= height + h; y += h) { // rows

let r = random(255);
let g = random(255);
let b = random(255);

      fill(r, g, b, 60);
      noStroke();

      ellipse(
        x + random(10, 40), 
        y + random(20, 60), 
        w + random(40)
      );
      
    } 
  }
}