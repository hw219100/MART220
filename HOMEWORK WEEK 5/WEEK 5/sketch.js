// Student Name: Honor Westcott
// Week 5 Creative Coding Homework

// arrays
let sushiX = [];
let sushiY = [];
let sushiSize = [];
let sushiSpeed = [];
let sushiAmount = 12;

// setup
function setup() {
  createCanvas (600, 600);
  
// create sushi
  for (let i = 0; i< sushiAmount; i++) {
    sushiX[i] = random(width);
    sushiY[i] = random(height);
    sushiSize[i] = random(40, 70);
    sushiSpeed[i] = random(2, 2.5);  
  }
}

//loop
function draw() {
  background(0, 102, 102);
  
//sushi loop
  
for (let i = 0; i < sushiAmount; i++) {
  drawSushi(sushiX[i], sushiY[i], sushiSize[i]);
  
// sushi moves down
  
sushiY[i] += sushiSpeed[i];
  
// sushi returns to screen
  if (sushiY[i] > height){
    sushiY[i] = 0;
    sushiX[i] = random(width);
    }
  }
}

// draw sushi
function drawSushi(x, y, size){
 // Rice
  noStroke();
  fill(255);
  rect(x, y, size, size * 0.6);
  fill(255, 130, 130);
  ellipse(x + size / 2, y + size * 0.3, size * 0.8, size * 0.4);
}