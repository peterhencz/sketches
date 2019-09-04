let t = 0;

function setup() {
  createCanvas(900, 900);
  background("#666");
  noFill();
  stroke("#f4baba");
}

function draw() {
  translate(width / 2, height / 2);
  let t = 0;
  beginShape();

  for (let a = 0; a < TWO_PI; a += 0.009) {
    let r = map(noise(t), 0, 1, 200, 210);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    t += 0.01;
  }
  endShape(CLOSE);
  noLoop();
}
