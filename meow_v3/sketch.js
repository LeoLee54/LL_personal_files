/*
Meow V3
animated meow/logo
*/
var x = 0;
var y = 123;
var s = 86;
var xSpeed = 3;
var ySpeed = 3;
var c;
var count = 0;
var ball;

function preload() {
	ball = loadImage('Ball.png');
}

function setup() {
	createCanvas(600, 400);
	noStroke();

	var r = random(255);
	var g = random(255);
	var b = random(255);
	c = color(r, g, b);
}

function draw() {
	background('lightblue');
	
	tint(c);
	image(ball, x, y, s, s);

	count++;
	if (count == 30) {
		s = random(88, 188);
		count = 0;
	}
	
	x += xSpeed;
	y += ySpeed;

if (x > width || x < 0) {
	xSpeed *= -1;

	var r = random(255);
	var g = random(255);
	var b = random(255);
	c = color(r, g, b);
}

if (y > height || y < 0) {
	ySpeed *= -1;

	var r = random(255);
	var g = random(255);
	var b = random(255);	
	c = color(r, g, b);
}

}