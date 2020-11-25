/*
sound v2
*/

function preload() {
  song = loadSound('legend.wav');
}

function setup () {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textFont('Courier');
  textSize(20);
  r = random(255);
  g = random(255);
  b = random(255);
}

function mousePressed() {
  var d = dist(280, 290, mouseX, mouseY);
  if (d < 33) 
  { 
    song.play();
  }
  if (mouseX > 410 && mouseX < 478 && mouseY > 250 && mouseY < 323) {
    song.stop();
}
if (mouseX > 120 && mouseX < 140 && mouseY > 240 && mouseY < 326) {
  song.pause();
  }
if (mouseX > 80 && mouseX < 135 && mouseY > 270 && mouseY < 325) {
  song.pause();
  }
  if (mouseX > 250 && mouseX < 306 && mouseY > 77 && mouseY < 133){
  r = random(255);
  g = random(255);
  b = random(255);
  }
}

function draw () {
  background(r, g, b);
  noStroke();
fill('#00FF00');
text("Start Button", 280, 350)
  var d = dist(280, 290, mouseX, mouseY);
  if (d < 33) {
    fill('#33FFD6');
  }
  circle(280, 290, 66);

  fill('red');
  text("Stop Button", 450, 350)
if (mouseX > 410 && mouseX < 478 && mouseY > 250 && mouseY < 323) {
    fill('#33FFD6');
  }
  rect(410, 257, 66, 66);

fill('yellow');
text("Pause Button", 108, 350)
if (mouseX > 80 && mouseX < 135 && mouseY > 270 && mouseY < 325) {
    fill('#33FFD6');
  }
  beginShape(QUADS);
vertex(80, 270);
vertex(80, 325);
vertex(100, 325);
vertex(100, 270);
vertex(115, 270);
vertex(115, 325);
vertex(135, 325);
vertex(135, 270);
vertex(155, 270);
vertex(155, 325);
endShape();
fill('#8258FA')
text("Change Background", 270, 150)
if (mouseX > 250 && mouseX < 306 && mouseY > 77 && mouseY < 133) {
    fill('#33FFD6');
  }
quad(258, 88, 306, 77, 289, 120, 250, 133);
}