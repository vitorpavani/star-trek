
const game = new Game();
let ship;
let asteroids = [];
let stars=[];
let sun;
let img;

let mainSound;
let explodeSound;
let hitSound;
let laserSound;
let thrustSound;

let fireparticles = [];
let fr = 30;
let lazers = [];
let points = 0;
let life = 8;
let reset = false;
let galaxy = 0; 

var song;


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  frameRate(fr)

  mainSound.loop();
  
  


  ship = new Ship;
  lazers = [];
  fireparticles = [];

  sun = new Sun;

  asteroids = [];
  for (let i = 0; i< random(16, 16+ galaxy*8);i++){
    asteroids.push(new Asteroid(createVector ( random(-1,1)*(WIDTH + 500) , random(-1,1)*(HEIGHT + 500)), random(20, 50) ));
  }

  stars=[];
  for (let i = 0; i< 50; i++){
    stars.push(new Star());
  }

  points = 0;
  reset = false;
}



function preload() {
  
  img = loadImage('./images/ship.png');

  mainSound = loadSound('./sounds/main.mp3');
  explodeSound = loadSound('./sounds/explode.m4a');
  hitSound = loadSound('./sounds/hit.m4a');
  laserSound = loadSound('./sounds/laser.m4a');
  thrustSound = loadSound('./sounds/thrust.m4a');
  shieldSound = loadSound('./sounds/forcefield.mp3')
  
  laserSound.setVolume(0.2);
  explodeSound.setVolume(0.5);
  hitSound.setVolume(0.8);
  thrustSound.setVolume(0.05);

  
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
    thrustSound.play(); 
  } else { 
    thrustSound.stop();
  }

  if ( keyIsDown(39) ) {  
    ship.setRotation(0.1);
  }

  if (keyIsDown(37)) {
    ship.setRotation(-0.1);
  }

  
  if(reset === true) {
    mainSound.stop();
    setup();
  }
}

function keyPressed() {
  // console.log("I am being pressed!!!!!!!!!!!");
  //This is a p5 variable that gives you a number!
  //console.log("KeyPressed : "+keyCode)
  
  if(keyCode == 32){
    ship.fireLazer();
    laserSound.play();

  }

  if (keyCode == 17){
    ship.shildForce = true;
    shieldSound.play();
  }
  
}

function keyReleased(){

  
 if( keyCode == 39 || keyCode == 37){
    ship.setRotation(0);
 }
 if (keyCode == 17){
   ship.shildForce = false;
   shieldSound.stop();
 }
 
 
  
}