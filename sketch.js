let x, y;
var slider;
var sliderr;
var sliderrr;
var bgcolor;

function setup() {

  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height;
  slider = createSlider(10, 300, 5);
  sliderr = createSlider(10, 300, 5);
  sliderrr = createSlider(10, 300, 5);
}

function changeColor() {
  bgcolor = color(random(255));
}

function draw() {

  background(0);
  textSize(40);
  fill(200, 400, 400);
  text('Alejandro Velandia', 350, 100);


  stroke(50);
  fill(slider.value(), sliderr.value(), sliderrr.value());
  ellipse(60, y, 24, 24);
  ellipse(30, y, 24, 24);
  ellipse(90, y, 24, 24);
  ellipse(120, y, 24, 24);
  ellipse(150, y, 24, 24);
  ellipse(180, y, 24, 24);
  ellipse(210, y, 24, 24);
  ellipse(240, y, 24, 24);
  ellipse(270, y, 24, 24);


  x = x + random(-1, 1);
  y = y - 1;
  if (y < 0) {
    y = height;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}