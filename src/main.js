
const game = new Game();
let ship;
let asteroids = [];


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  ship = new Ship;
  for (let i = 0; i< random(5, 10);i++){
  asteroids.push(new Asteroid());
  }

  
}

function preload() {

  
}

function draw() {
  game.drawGrid();

  //functions for Ships
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
    
  
//functions for asteroids
for ( let i = 0; i < asteroids.length ; i++){
  asteroids[i].render();
  asteroids[i].update();
  asteroids[i].edges();
}  
  
}

function keyPressed() {
  // console.log("I am being pressed!!!!!!!!!!!");
  //This is a p5 variable that gives you a number!
  console.log("KeyPressed : "+keyCode)
  if (keyCode == 39){
    ship.setRotation(0.1);
  } else if(keyCode == 37){
    ship.setRotation(-0.1);
  }else if (keyCode == 38 ){
    ship.boosting(true);
  }
}

function keyReleased(){

  console.log("keyReleased : "+keyCode)

  ship.setRotation(0);
  ship.boosting(false);

}