let angle = 1;
let x = 100;
let y = 0;
let c, bgc;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  angleMode(DEGREES);
}

function cica() {
  console.log("cica");
  fill(200, 100, 30);
  ellipse(30, 40, 30);
}

function draw() {
  noFill();
  push();
  rotateX(angle / 100);
  rotateY(angle / 10);
  translate(400, 0);
  bgc = color(10);
  background(bgc);

  for (i = 5; i <= 100; i++) {
    c = color(2 + i * 5, 50, 100, (255 / i) * 30);
    rotateX(angle / 10);
    stroke(c);
    fill(c);
    push();
    translate(i / 8, i * 3);
    rotateY(angle / 5);
    curve(
      20 * sin(i * 20),
      1 / i,
      40,
      8,
      50 / i,
      -40 * i,
      -5,
      i * 4,
      20 / i,
      10 * i,
      -60,
      -34,
      30 / i
    );
    rotateX(angle / 5);

    pop();
  }

  console.log(x, y);
  // translate(10, 10);
  // translate(x, y);
  // rotate(angle);
  // stroke("white");
  // line(0, 0, x / 2, y / 2);
  // translate(x / 2, y / 2);
  // rotate(angle);
  // stroke("#444");
  // line(0, 0, x / 3, y / 3);
  // translate(x / 3, y / 3);
  // rotate(angle);
  // stroke("#444");
  // line(0, 0, x, y);
  angle = angle + 1;
}

// function mousePressed() {
//   saveFrames("out", "png");
// }
