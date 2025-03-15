let capture; // variable to hold the video capture

function setup() {
  createCanvas(640, 480);
  // create the capture object
  capture = createCapture(VIDEO);
  // set the size of the capture
  capture.size(320, 240);
  // hide the HTML video
  capture.hide();
}

function draw() {
  background(255);
  
  // draw the regular image
  image(capture, 0, 0);
  
  // draw the mirrored image
  push();
  translate(width, 0);
  scale(-1.0, 1);
  image(capture, 0, 0);
  pop();
  
  // draw an upside down image
  push();
  translate(0, height);
  scale(1.0, -1);
  image(capture, 0, 0);
  pop();
  
  // draw a mirrored and upside down image
  push();
  translate(width, height);
  scale(-1.0, -1);
  image(capture, 0, 0);
  pop();
}