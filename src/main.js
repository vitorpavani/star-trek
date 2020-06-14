
const game = new Game();


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  
}

function preload() {
  game.pleaseLoadGameImages();
  console.log("This is preloading before the setup");
}

function draw() {
  game.drawGrid();
  game.doSomething();

  
  
}

function keyPressed() {
  // console.log("I am being pressed!!!!!!!!!!!");
  //This is a p5 variable that gives you a number!

 
}

