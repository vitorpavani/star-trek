
const game = new Game();
let ship;
let asteroids = [];
let stars=[];
let sun;
let img;
let fireparticles = [];
let fr = 30;
let lazers = [];
let points = 0;
let life = 8;
let reset = false;
let galaxy = 0; 


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  frameRate(fr)

  ship = new Ship;
  lazers = [];
  fireparticles = [];

  sun = new Sun;

  asteroids = [];
  for (let i = 0; i< (galaxy+1)/2*random(15, 30);i++){
    asteroids.push(new Asteroid(createVector ( random(-1,1)*(WIDTH + 500) , random(-1,1)*(HEIGHT + 500)), random(20, 50) ));
  }

  stars=[];
  for (let i = 0; i<random((WIDTH*HEIGHT)/50); i++){
    stars.push(new Star());
  }

  points = 0;
  reset = false;
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

  
  if(reset === true) setup();
}

function keyPressed() {
  // console.log("I am being pressed!!!!!!!!!!!");
  //This is a p5 variable that gives you a number!
  //console.log("KeyPressed : "+keyCode)
  
  if(keyCode == 32){
    ship.fireLazer();
  }

  if (keyCode == 17){
    ship.shildForce = true;
  }
  
}

function keyReleased(){

  
 if( keyCode == 39 || keyCode == 37){
    ship.setRotation(0);
 }
 if (keyCode == 17){
   ship.shildForce = false;
 }
 
 
  
}