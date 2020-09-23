/*
self portrait v2
by leo lee
*/

// global scope
var x = 300; // character origin
var y = 140;

var eyeSize = 70;
var mouthSize = 80;

function setup(){
	createCanvas(630, 360);
}

function draw(){
	background('gold');

    // face
    noStroke();
    fill("#D8D8D8"); // silver
    ellipse(x, y + 20, x - 100, y + 120);
   
    // eyes
    fill("lightblue");
    circle(x + 50, y, eyeSize); 
    circle(x - 50, y, eyeSize); 

    // mouth
    fill("#DC143C");
    ellipse(x, y + 100, mouthSize, mouthSize / 2);

    // hair
    stroke("#DEB887");  // brown
    line(x - 30, y - 100, x + 100, y - 50);
    line(x - 15, y - 100, x + 115, y - 50);
    line(x, y - 100, x + 130, y - 50);
    line(x - 140, y + 28, x, y - 90);
    line(x - 150, y + 28, x - 15, y - 90);
    line(x - 160, y + 28, x - 30, y - 90);


 }