/*
self portrait
by leo lee
*/

function setup(){
	createCanvas(630, 360);
}

function draw(){
	background('white');

    // face
    noStroke();
    fill("#D8D8D8"); // silver
    ellipse(300, 160, 200, 260);
   
    // eyes
    fill("lightblue");
    circle(350, 140, 70); 
    circle(250, 140, 70); 

    // mouth
    fill("#DC143C");
    ellipse(300, 240, 80, 40);

    // hair
    stroke("#DEB887");  // brown
    line(270, 40, 400, 90);
    line(285, 40, 415, 90);
    line(300, 40, 430, 90);
    line(160, 168, 300, 50);
    line(150, 168, 285, 50);
    line(140, 168, 270, 50);


 }