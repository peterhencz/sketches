let noiseMax = 1;
let slider;
let phase = 0;
let zoff = 0;
let t = 1;

function setup() {
  createCanvas(900, 900);
  slider = createSlider(0, 200, 0.001);
  slider2 = createSlider(1, 100, 0.01);
  slider3 = createSlider(1, 10, 0.1);
}

function draw() {
  // let cr = Math.round(noise(t) * 100, 0.1);
  translate(width / 2, height / 2);
  background("#333");
  stroke(100);
  fill("#f4baba");
  noFill();
  beginShape();
  let cica = slider.value();
  let kutya = slider2.value() / 100;
  let z = slider3.value() / 1000;
  console.log(z);
  for (let a = 0; a < TWO_PI; a += 0.001) {
    let xoff = map(cos(a + phase), -1, kutya, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, kutya, 0, noiseMax);
    // let xoff = map(cos(a), -1, 1, 0, noiseMax);
    // let yoff = map(sin(a), -1, 1, 1, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 150, cica * 1.5);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  phase += 0.001;
  zoff += z;
  t += 1;
  // noLoop();
}
