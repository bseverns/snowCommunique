// Tweakable parameters
let numb = 220;
let big = 10;
let down = 1;

let dots = [];

let cnv, im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, im11ß;

function preload() {
  im1 = createImg("assets/season.jpg","happy holidays");
  im2 = createImg("assets/wed.gif","wedding bells");
  im3 = createImg("assets/ben1.jpg","ben's headshot");
  im4 = createImg("assets/leen1.jpg","colleen's face at home");
  im5 = createImg("assets/SLKM.jpg","us doing our thing");
  im6 = creatImg("assets/cats.jpg", "the cats!");
  im7 = createImg("assets/benart1.png","things that ben does");
  im8 = createImg("assets/benart2.png","things ben has done");
  im9 = createImg("assets/benart3.png","things that ben does");
  im10 = createImg("assets/benart4.png","things that ben does");
  im11 = createImg("assets/leencat1.jpg","leen and the rocket");
}

// Will run once when the sketch is opened
function setup() {
  cnv = createCanvas(windowWidth, 200);
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
