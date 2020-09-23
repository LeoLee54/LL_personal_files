/*
    debug exercise
*/

//global scope
var x = 350; // character origin
var y = 250;

var faceSize = 300;

function setup(){
    createCanvas(640, 480);
}

function draw(){
    background(50);

    // face
    noStroke();
    fill("lightblue");
    ellipse(350, 320, faceSize);

    fill("black");
    ellipse(450, 250, 100); // right eye
    ellipse(x, y, 100); // left eye
    ellipse(x, y + 170, 100, 50); // mouth

    fill("white");
    ellipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

    fill("black");
    textSize(28);
    textFont('Monospace');
    text('Nice work!', 65, 110);

}
