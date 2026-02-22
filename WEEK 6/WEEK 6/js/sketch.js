// Student Name: Honor Westcott
let idleFrames = [];
let boxFrames = [];
let foods = [];
let thisAnimation;
let frameIndex = 0;
let frameCounter = 0;
let frameDelay = 8;
let changeTimer = 0;
let x = 200;
let y = 200;

function preload() {
  // idle frames
  idleFrames.push(loadImage("images/tile000.png"));
  idleFrames.push(loadImage("images/tile001.png"));
  idleFrames.push(loadImage("images/tile002.png"));
  idleFrames.push(loadImage("images/tile003.png"));
  idleFrames.push(loadImage("images/tile004.png"));
  idleFrames.push(loadImage("images/tile005.png"));
  idleFrames.push(loadImage("images/tile006.png"));
  idleFrames.push(loadImage("images/tile007.png"));
  idleFrames.push(loadImage("images/tile008.png"));
  idleFrames.push(loadImage("images/tile009.png"));

  // box frames
  boxFrames.push(loadImage("images/tileA.png"));
  boxFrames.push(loadImage("images/tileB.png"));
  boxFrames.push(loadImage("images/tileC.png"));
  boxFrames.push(loadImage("images/tileD.png"));
}

function setup() {
  createCanvas(600, 400);

  thisAnimation = idleFrames;

  foods.push(new Food(100, 320, 50, "donut"));
  foods.push(new Food(200, 320, 50, "sushi"));
  foods.push(new Food(300, 320, 50, "apple"));
  foods.push(new Food(400, 320, 50, "carrot"));
  foods.push(new Food(500, 320, 40, "blueberry"));
}

function draw() {
  background(220);

  // change animation every 120 frames
  changeTimer++;
  if (changeTimer > 120) {
    if (thisAnimation === idleFrames) {
      thisAnimation = boxFrames;
    } else {
      thisAnimation = idleFrames;
    }

    changeTimer = 0;
    frameIndex = 0;
  }

  // animate frames
  frameCounter++;
  if (frameCounter > frameDelay) {
    frameIndex++;
    frameCounter = 0;

    if (frameIndex >= thisAnimation.length) {
      frameIndex = 0;
    }
  }

  // draw current frame
  image(thisAnimation[frameIndex], x, y, 64, 64);

  // draw all food objects
  for (let i = 0; i < foods.length; i++) {
    foods[i].display();
  }
}