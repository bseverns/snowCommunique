// Tweakable parameters
let numb = 220;
let big = 10;
let down = 1;

let dots = [];

// Will run once when the sketch is opened
function setup() {
  var cnv = createCanvas(windowWidth, 200);
  cnv.parent('sketch-holder');
  noStroke();

  // Initialize the snowflakes with random positions
  for (let i = 0; i < numb; i++) {
    dots.push({
      x: random(width),
      y: random(height)
    });
  }
}

// Will run every frame (refreshes many times per second)
function draw() {
  background("blue");

  // Iterate through each snowflake to draw and update them
  for (let i = 0; i < dots.length; i++) {
    const snowflake = dots[i];

    circle(snowflake.x, snowflake.y, big);

    if (snowflake.y > height + big) snowflake.y = -big;
    else snowflake.y += down;
  }

}

function windowResized() {
  resizeCanvas(windowWidth,200);
}
