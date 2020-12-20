/*
Final Project
*/

let inX=0;
let inY=0;
let inXSpeed=3;
let inYSpeed=3;

let outX=500;
let outY=0;
let outXSpeed=3;
let outYSpeed=3;

let smile=inY;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background('skyblue');

  fill(245, 187, 87);
  stroke(245, 187, 87);
  push();
  translate(100, 80);
  rotate(radians(frameCount / 2));
  ellipse(0, 0, 60, 60);
  line(0, -60, 0, -40);
  line(0, 40, 0, 60);
  line(-45, -45, -30, -30);
  line(45, -45, 30, -30);
  line(-60, 0, -40, 0);
  line(40, 0, 60, 0);
  line(-45, 45, -30, 30);
  line(45, 45, 30, 30);
  pop();
  noFill();
  
  noStroke();
  fill('white');
  ellipse(250,70,60,50);
  ellipse(280,60,60,50);
  ellipse(330,70,60,50);
  ellipse(270,90,60,50);
  ellipse(310,85,60,50);
  
  noStroke();
  fill('white');
  ellipse(450,70,60,50);
  ellipse(480,60,60,50);
  ellipse(530,70,60,50);
  ellipse(470,90,60,50);
  ellipse(510,85,60,50);
  
  let angle;
  let outVector =  createVector(outX - inX, outY - inY);

  angle = outVector.heading();

  fill(0);
  push();
  translate(inX,inY);
  rotate(angle);
  rect(0,0,60,16);
  ellipse(60,8,25,25);
  pop();
  
  fill(144,249,0,33);
  stroke('#AB651E');
  strokeWeight(5);
  rect(mouseX-100,mouseY-100,200,200);
  
  noStroke();
  
  fill(0);
  ellipse(inX-20,inY-20,20,20);
  ellipse(inX+20,inY-20,20,20);
  fill(255);
  ellipse(inX,inY,50,50);
  fill(0);
  
  push();
  translate(inX+10, inY-5);
  rotate(45);
  ellipse(0,0,20,12);
  pop();
  
  push();
  translate(inX-10,inY-5);
  rotate(2*PI-45);
  ellipse(0,0,20,12);
pop();
  stroke(0);
  strokeWeight(1);
  fill(255,0,0);
    
  curve(inX-15,smile,inX-10,inY+10,inX+10,inY+10,inX+15,smile);

  smile=map(dist(inX,inY,outX,outY),0,600,inY-150,inY);
  push();
  rotate(50);
  fill(0,100,0);
  pop();
  
  inX+=inXSpeed;
  inY+=inYSpeed;
  
  if(inX<=mouseX-100){
     inX=mouseX-100;
     inXSpeed=-inXSpeed;
     };
  if(inX>=mouseX+100){
     inX=mouseX+100;
     inXSpeed=-inXSpeed;
     };
    if(inY<=mouseY-100){
     inY=mouseY-100;
     inYSpeed=-inYSpeed;
     };
  if(inY>=mouseY+100){
     inY=mouseY+100;
     inYSpeed=-inYSpeed;
     };
  
  fill('255');
  outX+=outXSpeed;
  outY+=outYSpeed;
  
  if(outX<=0){
     outX=0;
     outXSpeed=-outXSpeed;
     };
  if(outX>=600){
     outX=600;
     outXSpeed=-outXSpeed;
     };
  if(outY<=0){
     outY=0;
     outYSpeed=-outYSpeed;
     };
  if(outY>=600){
     outY=600;
     outYSpeed=-outYSpeed;
     };
  
  if(outX<=mouseX+100 && outX>=mouseX-100 && outY<mouseY+100 && outY>mouseY-100 && outX-mouseX>=30){
     outX=mouseX+100;
     outXSpeed=-outXSpeed;
     };
  if(outX<=mouseX+100 && outX>=mouseX-100 && outY<mouseY+100 && outY>mouseY-100 && outX-mouseX<=-30){
     outX=mouseX-100;
     outXSpeed=-outXSpeed;
     };
  if(outX<=mouseX+100 && outX>=mouseX-100 && outY<=mouseY+100 && outY>=mouseY-100 && outY-mouseY>=30){
     outY=mouseY+100;
     outYSpeed=-outYSpeed;
     };
  if(outX<=mouseX+100 && outX>=mouseX-100 && outY<=mouseY+100 && outY>=mouseY-100 && outY-mouseY<=-30){
     outY=mouseY-100;
     outYSpeed=-outYSpeed;
     };
  
  noStroke();
  line(mouseX+100, mouseY+100, pmouseX+100, pmouseY+100)
  line(mouseX-100, mouseY-100, pmouseX-100, pmouseY-100)
  line(mouseX+100, mouseY-100, pmouseX+100, pmouseY-100)
  line(mouseX-100, mouseY+100, pmouseX-100, pmouseY+100)
  
  fill('#EEF969');
  quad(mouseX+100, mouseY+100, pmouseX+100, pmouseY+100, pmouseX+100, pmouseY-100, mouseX+100, mouseY-100);
  quad(mouseX-100,mouseY-100, pmouseX-100, pmouseY-100, pmouseX+100, pmouseY-100, mouseX+100, mouseY-100);
  quad(mouseX-100,mouseY-100, pmouseX-100, pmouseY-100, pmouseX-100, pmouseY+100, mouseX-100, mouseY+100);
  quad(mouseX-100, mouseY+100, pmouseX-100, pmouseY+100, pmouseX+100, pmouseY+100, mouseX+100, mouseY+100);
  
  noStroke();
  
  fill(110,154,66);
  push();
  translate(outX+10, outY+15);
  rotate(90);
  ellipse(0,0,20,12);
  pop();
  
  push();
  translate(outX+10, outY+35);
  rotate(90);
  ellipse(0,0,20,12);
  pop();
  
  push();
  translate(outX-10,outY+5);
  rotate(2*PI-81);
  ellipse(0,0,20,12);
  pop();
  
  push();
  translate(outX-10,outY+25);
  rotate(2*PI-81);
  ellipse(0,0,20,12);
  pop();
  
  push();
  translate(outX+10, outY-5);
  rotate(40);
  ellipse(0,0,20,12);
  pop();
  
  push();
  translate(outX-10,outY-15);
  rotate(2*PI-200);
  ellipse(0,0,20,12);
  pop();
  
  fill(44,103,5);
  rect(outX-5,outY-30,10,80);
  
  stroke(226,219,172);
  line(outX-5,outY-10,outX+5,outY-10);
  line(outX-5,outY+10,outX+5,outY+10);
  line(outX-5,outY+30,outX+5,outY+30);
  
  
  
  stroke(0);
  strokeWeight(1);
  fill(255,0,0);
  
  noStroke();
  if(dist(inX,inY,outX,outY)<50){
    fill('lavender');
    let gameX=0.5*inX+0.5*outX;
    let gameY=0.5*inY+0.5*outY;
    ellipse(gameX,gameY,86,86);
    textSize(50);
    strokeWeight(3);
    stroke('lavender');
    fill('#64E255');
    text('Delicious!',outX-66,outY);
  };
  
  
}