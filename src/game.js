class Player {
  constructor() {
    
  }

// Moviments for the players

}


class Game {
  
  constructor() {
    
    
  }

  pleaseLoadGameImages(){
    

  }
  
  drawGrid() {

    background(color('#000014'));    
    textSize(32);
    text(`Life = ${life} `, 10, 30);
    text(`Points = ${points} `, 10, 60);
    text(`Galaxy = ${galaxy} `, 10, 90);
    text(`Gravity = ${Math.round(sun.r)} N/kg `, 10, 120);

    fill(255, 255, 255);
  }
  
}

// END OF CLASSES 















