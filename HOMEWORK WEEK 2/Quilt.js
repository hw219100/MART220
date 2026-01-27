function setup()
{
    createCanvas(600,650);
}

function draw()
{
    noStroke();

    // define tile size 
    let t = 200;

    // row one

    // tile #1
    fill(255,138,38);
    rect(0,0,t,t);
    fill(255,209,92);
    quad(100,30,170,100,100,170,30,100);

    // tile #2
    fill(155,108,255);
    rect(200,0,t,t);
    fill(90,30,230);
    rect(240,40,120,120);

    // tile #3
    fill(185,255,102);
    rect(400,0,t,t);
    fill(0,200,83);
    triangle(400,200,600,200,500,0);

    // row two

    // tile #4
    fill(255,112,199);
    rect(0,200,t,t);
    fill(232,182,255);
    ellipse(100,300,120,120);

    // tile #5
    fill(255,138,61);
    rect(200,200,t,t);
    fill(255,46,46);
    triangle(200,200,300,300,200,400);
    triangle(400,200,300,300,400,400);

    // tile #6
    fill(25,0,168);
    rect(400,200,100,100);
    rect(500,300,100,100);
    fill(90,116,255);
    rect(500,200,100,100);
    rect(400,300,100,100);

    // row three

    // tile #7
    fill(39,206,215);
    rect(0,400,t,t);
    fill(0,124,145);
    rect(0,400,33,200);
    rect(66,400,33,200);
    rect(132,400,33,200);

    // tile #8
    fill(107,47,160);
    rect(200,400,t,t);
    fill(92,124,255);
    rect(280,400,40,200);
    rect(200,480,200,40);
    ellipse(250,450,30,30);
    ellipse(350,450,30,30);
    ellipse(250,550,30,30);
    ellipse(350,550,30,30);

    // tile #9
    fill(255,224,102);
    rect(400,400,t,t);
    fill(155,232,106);
    rect(490,420,20,160);
    rect(420,490,160,20);
    fill(120,200,90);
    rect(460,460,80,80);
    fill(180,240,140);
    ellipse(430,430,30,30);
    ellipse(570,430,30,30);
    ellipse(430,570,30,30);
    ellipse(570,570,30,30);

    // name banner
    noStroke();
    fill(40);
    rect(0,600,600,50);

    // name and title
    fill(255);
    textSize(24);
    textAlign(CENTER,CENTER);
    text("Quilt by Honor Westcott",300,625);
}

