class Lazer {
    constructor(pos, direction) {
      this.x = pos.x + direction.x*ship.imageX/2;
      this.y = pos.y + direction.y*ship.imageX/2;
      this.vx = 25*direction.x;
      this.vy = 25*direction.y;
      this.alpha = 255;  
      this.heading = direction;
      
    }
  
    finished() {
        if(this.x > WIDTH || this.x < 0) {
            return true;
        }   
        if (this.y > HEIGHT || this.y <0) {
            return true;
        }

        for(let i in asteroids){
            if ( asteroids[i].r > dist(this.x, this.y, asteroids[i].pos.x, asteroids[i].pos.y) ) {            
                
                if( asteroids[i].r > 30 ){
                  asteroids.push(new Asteroid(createVector ( this.x, this.y), random(30, 50)/2 ));
                  asteroids.push(new Asteroid(createVector ( this.x, this.y), random(30, 50)/2 ));
                }
                
                for (let i = 0; i < random(150,300); i++) {
                  
                  let p = new FireParticles(createVector(this.x,this.y), createVector(random(),random ()));
                  fireparticles.push(p);
                }
                asteroids.splice(i,1);  
                points++;
                hitSound.play();
                if(points === 10*(galaxy+1)){     
                  reset = true; 
                  galaxy ++;
                }
                return true;              
            }
        }
        
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