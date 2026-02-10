// student name: Honor Westcott
// Week 4 Creative Coding Homework

// variables
let food1;
let food2;
let food3;
let foodai;
let titleFont;
let xPosition = 0;

// image pre-load
function preload(){
    food1 = loadImage("assets/images/food1.png");
    food2 = loadImage("assets/images/food2.png");
    food3 = loadImage("assets/images/food3.png");
    foodai = loadImage("assets/images/foodai.png");
    titleFont = loadFont("assets/fonts/Butterpop.ttf");
}

// setup
function setup(){
    createCanvas(600,600);
    setInterval(moveImage, 2000);
}

// draw
function draw(){
     
    background(204, 255, 255);

    // banner
    noStroke();
    fill(204, 229, 255);
    rect(0, 20, width, 110);

    // text
    fill(0);
    textFont(titleFont);
    textSize(40);
    textAlign(CENTER);
    text("My Favorite Food Sushi", width/2, 60);

    textSize(20);
    text("Honor Westcott", width/2, 100);

    // images
    image(food1, 50, 200, 150, 150);
    image(food2, 225, 200, 150, 150);
    image(food3, 400, 200, 150, 150);
    image(foodai, xPosition, 400, 150, 150);
}

// image movement
function moveImage() {
    xPosition = random(0, width - 150);
}
