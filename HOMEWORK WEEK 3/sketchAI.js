// Student Name:

// ---------------- VARIABLES ----------------
let tileSize = 200;
let cols = 3;
let rows = 3;

let circleX = 0;
let circleY = 0;
let circleSpeed = 2;

// ---------------- SETUP ----------------
function setup() {
  createCanvas(600, 600);
  noStroke();
  circleY = height / 2;
}

// ---------------- DRAW ----------------
function draw() {
  background(240);

  // ---------- DRAW QUILT ----------
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {

      let x = col * tileSize;
      let y = row * tileSize;

      // tile background
      fill(255, 180, 100);
      rect(x, y, tileSize, tileSize);

      // animated inner shape
      let pulse = sin(frameCount * 0.05 + row + col) * 20;

      fill(255, 230, 180);
      ellipse(
        x + tileSize / 2,
        y + tileSize / 2,
        80 + pulse,
        80 + pulse
      );

      // accent square
      fill(255, 120, 80);
      rect(
        x + 60,
        y + 60,
        80,
        80
      );
    }
  }

  // ---------- MOVING CIRCLE ----------
  fill(80, 180, 220);
  ellipse(circleX, circleY, 50, 50);

  circleX += circleSpeed;

  // wrap around
  if (circleX > width + 25) {
    circleX = -25;
    circleY = random(100, height - 100);
  }
}