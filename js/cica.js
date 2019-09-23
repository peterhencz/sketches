let n;
let cRand;
let c1, c2, c3, x, y, r;
let fr = 30;
let t = 0;

function setup() {
  cRand = Math.round(random(255));
  frameRate(30);
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  background(cRand / 2, cRand / 2, cRand / 2);
}
x = window.innerWidth / 2;
y = window.innerHeight / 2;

function draw() {
  x = Math.round(random(window.innerWidth));
  y = Math.round(random(window.innerHeight));
  if (mouseIsPressed) {
    translate(-width / 2, -height / 2, 0);
    r = Math.round(random(40));
    stroke("#f4baba");
    line(x - 20, y - 20, x - r, y + r * 2);
    console.log(x, y);
    console.log("r", r);
    x = x + 1;
  }
}
