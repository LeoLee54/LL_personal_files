/*
meow v1
text x images
*/

var title = 'Courage';
var description = 'Choose the Right Synonym for courage. courage, mettle, spirit, resolution, tenacity mean mental or moral strength to resist opposition, danger, or hardship. courage implies firmness of mind and will in the face of danger or extreme difficulty.';
var swImage;

function preload() {
	swImage = loadImage('sw.png');
}

function setup() {
createCanvas(630, 360);
}

function draw() {
background('lightblue');

image(swImage, 0, 0, width, height);

textSize(66);
fill("#102EF4");
textFont('Courier');
textAlign(CENTER, BOTTOM);

var len = title.length;
var n = map(frameCount, 0, 66, 0, len);

text(title.substring(0, n), width / 2, height / 2);

var titleWidth = textWidth(title);

textSize(15);
textAlign(LEFT);
textStyle('bold');
fill('#7E00FF');
text(description, width / 2 - titleWidth / 2, height / 2 + 22, titleWidth);

}