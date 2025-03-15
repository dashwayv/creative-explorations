let capture;
const numCols = 10; // Number of columns in the grid
const numRows = 10; // Number of rows in the grid
let cellWidth, cellHeight;
let isMirrored = false; // Flag to track whether to mirror the image

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide(); // Hide the original video element
  cellWidth = width / numCols;
  cellHeight = height / numRows;
}

function draw() {
  background(255);

  // Draw the repetitive pattern
  for (let x = 0; x < numCols; x++) {
    for (let y = 0; y < numRows; y++) {
      const xPos = x * cellWidth;
      const yPos = y * cellHeight;
      if (isMirrored) {
        push();
        translate(xPos + cellWidth, yPos); // Translate to the right edge of the cell
        scale(-1, 1); // Mirror horizontally
        image(capture, 0, 0, cellWidth, cellHeight);
        pop();
      } else {
        image(capture, xPos, yPos, cellWidth, cellHeight);
      }
      isMirrored = !isMirrored; // Toggle the flag for the next cell
    }
    // Toggle the flag for the next row
    isMirrored = numRows % 2 === 0 ? !isMirrored : isMirrored;
  }
}







