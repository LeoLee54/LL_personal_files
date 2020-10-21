/*
meow v2
conditional logic
*/

var hardworking, lazy;

function preload() {
hardworking = loadImage("hardworking.jpg");
lazy = loadImage("lazy.jpg")
}

function setup() {
	createCanvas(564, 446);
	textAlign(CENTER, CENTER);
	textFont('Courier');
	textSize(30);
}

function draw() {
	background('#98ff98');

	if (mouseIsPressed) {
		image(lazy, 0, 0, 564, 446);
		fill('#0829FF');
		text("I am an extremely lazy person..", width / 2, 280);
	} else {
		image(hardworking, 0, 0, width, height);
		fill('#0829FF');
		text("I want to be hardworking, but...", width / 2, 280);
	}
}
