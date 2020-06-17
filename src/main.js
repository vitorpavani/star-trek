
const game = new Game();
let ship;
let asteroids = [];
let stars=[];
let sun;
let img;
let fireparticles = [];
let fr = 55;
let lazers = [];


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");

  frameRate(fr)
  ship = new Ship;
  sun = new Sun;
  for (let i = 0; i< random(10, 20);i++){
    asteroids.push(new Asteroid());
  }

  for (let i = 0; i<random((WIDTH*HEIGHT)/50); i++){
    stars.push(new Star());
  }

  
}

function preload() {
  
  img = loadImage('./images/ship.png');

  
}

function draw() {

  game.drawGrid();

  sun.render();
  sun.colision();

  //functions for Ships
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
  ship.gravity();

  
    
  
//functions for asteroids
for ( let i = 0; i < asteroids.length ; i++){
  asteroids[i].render();
  asteroids[i].update();
  asteroids[i].gravity();
}  

//functions for stars
for (let star in stars){
  stars[star].render();
  if(stars[star].finished()){
    stars.splice(star, 1);
  }
}

// functions for fireparticles


for (let i = fireparticles.length - 1; i >= 0; i--) {
  fireparticles[i].update();
  fireparticles[i].show();
  if (fireparticles[i].finished()) {
    // remove this particle
    fireparticles.splice(i, 1);
  }
}

// function for lazers

for (let i = lazers.length - 1; i >= 0; i--) {
  lazers[i].update();
  lazers[i].show();
  
  if (lazers[i].finished()) {
    // remove this particle
    lazers.splice(i, 1);
  }
}

  if ( keyIsDown(38) ) {  
    ship.boost();
  }

  if ( keyIsDown(39) ) {  
    ship.setRotation(0.1)
  }

  if (keyIsDown(37)) {
    ship.setRotation(-0.1)
  }

  
  
}

function keyPressed() {
  // console.log("I am being pressed!!!!!!!!!!!");
  //This is a p5 variable that gives you a number!
  //console.log("KeyPressed : "+keyCode)
  
  if(keyCode == 32){
    ship.fireLazer();

  }
  
}

function keyReleased(){

  
 ship.setRotation(0);
  
}