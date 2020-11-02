/*
sound v1
*/

var rainSound;
var birdSound;
var rain = [];
var rainingNow = true;

function preload() {
	rainSound = loadSound('rain.wav');
}

function setup() {
  createCanvas(600, 400);
  
  for (i = 0; i < 100; i++) {
    rain[i] = new Rain(random(0, 600), random(0, -3000));
  }
}

function draw() {
  background('skyblue');
   ground();
  noStroke();
  fill('white');
	ellipse(300, 40, 90, 80);
	ellipse(265, 65, 90, 80);
	ellipse(350, 45, 90, 80);
	ellipse(295, 93, 90, 80);
	ellipse(355, 85, 90, 80);
	 noStroke();
  fill('white');
	ellipse(100, 40, 90, 80);
	ellipse(66, 77, 90, 80);
	ellipse(140, 40, 90, 80);
	ellipse(100, 93, 90, 80);
	ellipse(160, 80, 90, 80);
	noStroke();
  fill('white');
	ellipse(480, 40, 90, 80);
	ellipse(455, 65, 90, 80);
	ellipse(540, 45, 90, 80);
	ellipse(475, 100, 90, 80);
	ellipse(540, 85, 90, 80);
  if (rainingNow == true) {
    for (i = 0; i < rain.length; i++) {
      rain[i].dropRain();
      rain[i].splash();
    }
  } 
}

function ground() {
  noStroke();
  fill('#A6918D');
  rect(0, 330, 600, 330);
}

function Rain(x, y) {
  this.x = x;
  this.y = y;
  this.length = 18;
  this.r = 0;
  this.opacity = 240;


  this.dropRain = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 2, this.length);
    this.y = this.y + 6
    if (this.y > 340) {
      this.length = this.length - 5;
    }
    if (this.length < 0) {
      this.length = 0;
    }
  }

  this.splash = function() {
    strokeWeight(2);
    stroke(200, this.opacity);
    noFill();
    if (this.y > 350) {
      ellipse(this.x, 350, this.r * 2, this.r / 2);
      this.r++;
      this.opacity = this.opacity - 10;
      if (this.opacity < 0) {
        this.y = random(0, -100);
        this.length = 15;
        this.r = 0;
        this.opacity = 200;
      }
    }
  }
}

function keyPressed() {
	if (keyCode == 13) {
		rainSound.play();
	}
	if (keyCode == 32) {
		rainSound.pause();
	}
}