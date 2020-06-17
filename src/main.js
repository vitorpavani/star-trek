
const game = new Game();
let ship;
let asteroids = [];
let stars=[];
let sun;
let img;
let fireparticles = [];


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  ship = new Ship;
  sun = new Sun;
  for (let i = 0; i< random(5, 10);i++){
    asteroids.push(new Asteroid());
  }

  for (let i = 0; i<random((WIDTH*HEIGHT)/50); i++){
    stars.push(new Star());
  }

  
}

function preload() {
  
  img = loadImage('../images/ship.png');

  
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
}

// functions for fioreparticles


for (let i = fireparticles.length - 1; i >= 0; i--) {
  fireparticles[i].update();
  fireparticles[i].show();
  if (fireparticles[i].finished()) {
    // remove this particle
    fireparticles.splice(i, 1);
  }
}
  
}

function keyPressed() {
  // console.log("I am being pressed!!!!!!!!!!!");
  //This is a p5 variable that gives you a number!
  console.log("KeyPressed : "+keyCode)
  if (keyCode == 39){
    ship.setRotation(0.05);
  } else if(keyCode == 37){
    ship.setRotation(-0.05);
  }else if (keyCode == 38 ){
    ship.boosting(true);
  }
}

function keyReleased(){

  console.log("keyReleased : "+keyCode)

  ship.setRotation(0);
  ship.boosting(false);

}