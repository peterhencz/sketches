let phase = 0;

function setup() {
  createCanvas(900, 900);
  background("#222");
}

function draw() {
  beginShape();
  translate(width / 2, height / 2);
  let o = noise(phase) * 200;
  // stroke(o - 30, o - 20, o - 10);
  stroke("#aaa");
  console.log(o);
  noFill();
  let t = 0;
  for (let i = 0; i < TWO_PI; i += 0.008) {
    let r = noise(t) * 500;
    let c = noise(phase);
    let x = r * cos(phase * i);
    let y = r * sin(i);
    vertex(x, y);
    t += 0.01;
  }
  if (phase <= 1) {
    phase += 0.05;
  }
  endShape();
}
