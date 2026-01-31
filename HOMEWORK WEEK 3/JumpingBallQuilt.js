// student name: Honor Westcott

// varibles

// define tile size 
let t = 200;

// shifting circle positions
let shiftX = 0;
let shiftY = 0;

// canvas setup
function setup()
{
    createCanvas(600,700); 
}

// draw
function draw(){
  noStroke();
  
  // top banner
  fill(40);
  rect(0, 0, width, 50);
  fill(255);
  textSize(22);
  textAlign(LEFT, CENTER);
  text("Jumping Ball Quilt", 15, 25);
  
  // bottom banner
  fill(40);
  rect(0, height - 50, width, 50);
  fill(255);
  textSize(18);
  textAlign(RIGHT, CENTER);
  text("Honor Westcott", width - 15, height - 25);
  
  // row one
  
  // tile #1
    fill(255,138,38);
    rect(0,50,t,t);
    fill(255,209,92);
    quad(100,80,170,150,100,220,30,150);

  // tile #2
    fill(155,108,255);
    rect(200,50,t,t);
    fill(90,30,230);
    rect(240,90,120,120);

  // tile #3
    fill(185,255,102);
    rect(400,50,t,t);
    fill(0,200,83);
    triangle(400,250,600,250,500,50);

  // row two
  
  // tile #4
    fill(255,112,199);
    rect(0,250,t,t);
    fill(232,182,255);
    ellipse(100,350,120,120);

  // tile #5
    fill(255,138,61);
    rect(200,250,t,t);
    fill(255,46,46);
    triangle(200,250,300,350,200,450);
    triangle(400,250,300,350,400,450);

  // tile #6
    fill(25,0,168);
    rect(400,250,100,100);
    rect(500,350,100,100);
    fill(90,116,255);
    rect(500,250,100,100);
    rect(400,350,100,100);

  // row three
  
  // tile #7
    fill(39,206,215);
    rect(0,450,t,t);
    fill(0,124,145);
    rect(0,450,33,200);
    rect(66,450,33,200);
    rect(132,450,33,200);

  // tile #8
    fill(107,47,160);
    rect(200,450,t,t);
    fill(92,124,255);
    rect(280,450,40,200);
    rect(200,530,200,40);
    ellipse(250,500,30,30);
    ellipse(350,500,30,30);
    ellipse(250,600,30,30);
    ellipse(350,600,30,30);

  // tile #9
    fill(255,224,102);
    rect(400,450,t,t);
    fill(155,232,106);
    rect(490,470,20,160);
    rect(420,540,160,20);
    fill(120,200,90);
    rect(460,510,80,80);
    fill(180,240,140);
    ellipse(430,480,30,30);
    ellipse(570,480,30,30);
    ellipse(430,620,30,30);
    ellipse(570,620,30,30);
  
  // moving circle
  let px = shiftX * t + t / 2;
  let py = shiftY * t + t / 2 + 50;
  fill(40);
  ellipse(px, py, 60, 60);
}

// event
function mousePressed()
{
    shiftX = int(random(3));
    shiftY = int(random(3));

    if (shiftX === 1 && shiftY === 1) {
        shiftX = 0;
        shiftY = 2;
    }
}