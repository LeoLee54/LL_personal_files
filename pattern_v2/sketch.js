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
  let vertical = random(height/2, height + w);

  for (let x = 0; x <= width + w; x += w) { // columns
    for (let y = 0; y <= height + h; y += h) { // rows
      

      let r, g, b;
      if (x < vertical) {
        // more blue
        r = random(255);
        g = random(255);
        b = random(255);
      } else {
        // more green
        r = random(255);
        g = random(255);
        b = random(255);
      }

      fill(r, g, b, 70);
      noStroke();

      ellipse(
        x + random(10, 40), 
        y + random(10, 60), 
        w + random(40)
      );
      
    } 
  }
}