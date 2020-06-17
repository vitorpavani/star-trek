class Lazer {
    constructor(pos, direction) {
      this.x = pos.x + direction.x*ship.imageX/2;
      this.y = pos.y + direction.y*ship.imageX/2;
    //  this.vx = 5*random(-direction.x , direction.x);
    //  this.vy = 5*random(-1+direction.y, 1+ direction.y );
      this.vx = 10*direction.x;
      this.vy = 10*direction.y;
      this.alpha = 255;  
      this.heading = direction;
    }
  
    finished() {
      return false;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
    
    }
  
    show() {
      push ();  
      //noStroke();
      stroke(255);
      strokeWeight(3);
      fill(255);

      line(this.x, this.y, this.x + 50*this.heading.x, this.y + 50*this.heading.y);
      pop ();
    }
  }