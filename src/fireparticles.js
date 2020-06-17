class FireParticles {
    constructor(pos, force) {
      this.x = pos.x - force.x*ship.imageX;
      this.y = pos.y - force.y*ship.imageX;
    //  this.vx = 5*random(-force.x , force.x);
    //  this.vy = 5*random(-1+force.y, 1+ force.y );
      this.vx = force.x*random(-5, -1)+random(-1, 1 );
      this.vy = force.y*random(-5, -1)+random(-1, 1 );
      this.alpha = 255;  
      this.heading = force;
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 10;
    }
  
    show() {
      push ();  
      noStroke();
      //stroke(255);
      fill(255, this.alpha);
      ellipse(this.x, this.y, 2);
      pop ();
    }
  }