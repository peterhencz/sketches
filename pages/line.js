let phase = 0;

function setup() {
  createCanvas(900, 900);
  background("#222");
}

function draw() {
  beginShape();
  translate(width / 2, height / 2);
  let o = noise(phase) * 200;
  stroke(o - 30, o - 20, o - 10);
  // stroke("#aaa");
  console.log(o);
  noFill();
  let t = 0;
  for (let i = 0; i < TWO_PI; i += 0.1) {
    let r = noise(t) * 500;
    let c = noise(phase * 400);
    let x = r * cos(phase * i * 0.25);
    let y = r * sin(i * 1.618);
    vertex(x, y);
    t += 0.025;
  }
  if (phase <= 1.25) {
    phase += 3.14;
  }
  endShape();
}
