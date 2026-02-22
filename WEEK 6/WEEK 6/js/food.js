// Student Name: Honor Westcott
class Food {
  constructor(x, y, size, type) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.type = type;
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();

    // donut
    if (this.type === "donut") {
      fill(210, 140, 90);
      ellipse(0, 0, this.size);
      fill(240, 180, 200);
      ellipse(0, 0, this.size * 0.7);
      fill(255);
      ellipse(0, 0, this.size * 0.3);
    }

    // sushi
    if (this.type === "sushi") {
      fill(255);
      rect(-this.size/2, -this.size/3, this.size, this.size/1.5, 10);
      fill(255, 120, 120);
      rect(-this.size/2 + 5, -this.size/3 + 5, this.size - 10, this.size/3, 5);
    }

    // apple
    if (this.type === "apple") {
      fill(200, 0, 0);
      ellipse(0, 0, this.size);
      fill(80, 160, 60);
      ellipse(10, -this.size/2, this.size/2, this.size/3);
    }

    // carrot
    if (this.type === "carrot") {
      fill(255, 140, 0);
      triangle(
        -this.size/2, -this.size/2,
        this.size/2, -this.size/2,
        0, this.size/2
      );
      fill(0, 150, 0);
      rect(-5, -this.size/2 - 15, 10, 15);
    }

    // blueberry
    if (this.type === "blueberry") {
      fill(40, 60, 160);
      ellipse(0, 0, this.size);
      fill(20, 40, 120);
      ellipse(0, 0, this.size * 0.5);
    }

    pop();
  }
}