function Ship(){
    //this.pos = createVector(WIDTH/2, HEIGHT/2);
    this.pos = createVector(random(WIDTH), random(HEIGHT));
    this.imageX = img.width/8;
    this.imageY = img.height/8;
    this.rotation = 0;
    this.heading = 0;
    this.vel = createVector(0, 0);
    this.isBoosting = false;
    this.mass = 20;
    this.shildForce = false;


    this.render = function (){
        //console.log("render")
        push ();

        translate(this.pos.x, this.pos.y)
        rotate(this.heading);
        
        stroke (255);
        image(img, -this.imageX/2, -this.imageY/2, this.imageX, this.imageY);

        pop (); 
        if (this.shildForce === true){
            push();
            noFill();
            stroke(255);
            strokeWeight(random(1,4));
            ellipse( this.pos.x, this.pos.y, this.imageX+10);
            pop();

            for(let i in asteroids){

                if ( asteroids[i].r+this.imageX+10 > dist(this.pos.x, this.pos.y, asteroids[i].pos.x, asteroids[i].pos.y) ) {
              
                    if( asteroids[i].r > 30 ){
                      asteroids.push(new Asteroid(createVector ( this.pos.x+random(this.imageX,this.imageX+10), this.pos.y+random(this.imageX,this.imageX+10)), random(15, 25) ));
                      asteroids.push(new Asteroid(createVector ( this.pos.x+random(this.imageX,this.imageX+10), this.pos.y+random(this.imageX,this.imageX+10)), random(15, 25) ));
                    }

                    for(let j= 0; j<random(150,300);j++){
                        let p = new FireParticles(createVector(this.pos.x, this.pos.y), createVector(random(),random ()));
                        fireparticles.push(p);
                    }
                    asteroids.splice(i,1);
                    points++;
                    hitSound.play();
                    if(points === 10*(galaxy+1)){
                        reset = true;
                        galaxy ++;
                    }
                }
            }
            
        } else {

            for(let i in asteroids){

                if ( asteroids[i].r+this.imageX > dist(this.pos.x, this.pos.y, asteroids[i].pos.x, asteroids[i].pos.y) ) {

                life--;
                explodeSound.play();
                reset = true;
                galaxy=0;
                    
                }
            }


        }
                   
    }

    this.gravity = function (){
      
        let force = p5.Vector.sub(sun.pos, this.pos)
        let distanceSq = constrain(force.magSq(),100,250);
        
        let G = 0.002*(galaxy+1);
        let strength = G * (this.mass*sun.mass)/distanceSq

        force.setMag(strength);
        this.vel.add(force);

        //this.vel.add(g)

    }

    
    

    this.boost = function (){
        
        let force = p5.Vector.fromAngle(this.heading);
        force.mult(0.2)
        this.vel.add(force);

        //particles system

        for (let i = 0; i < 30; i++) {
            let p = new FireParticles(this.pos, force);
            fireparticles.push(p);
          }

    }

    this.update = function (){
        
        this.pos.add(this.vel);
        //this.vel.mult(0.98);
        
    }

    this.fireLazer = function (){
        
        let direction = p5.Vector.fromAngle(this.heading);
        let l = new Lazer(this.pos, direction);
        lazers.push(l);
   
    }

   

    this.setRotation = function (angle){
        this.rotation = angle;
    }

    this.turn = function (){
        this.heading += this.rotation;
    }

    this.edges = function (){
        if (this.pos.x > WIDTH-this.imageX/2){
            this.pos.x  = WIDTH-this.imageX/2;
        } else if(this.pos.x < this.imageX/2){
            this.pos.x = this.imageX/2;
        }

        if (this.pos.y > HEIGHT-this.imageY/2 ){
            this.pos.y  = HEIGHT-this.imageY/2;
        } else if(this.pos.y < this.imageY/2){
            this.pos.y = this.imageY/2;
        }
        
    }

}

