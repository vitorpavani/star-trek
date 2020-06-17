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


    this.render = function (){
        //console.log("render")
        push ();

        translate(this.pos.x, this.pos.y)
        rotate(this.heading);
        
        stroke (255);
        image(img, -this.imageX/2, -this.imageY/2, this.imageX, this.imageY);
        //triangle(-this.r, this.r,this.r,this.r,0,-this.r-10);
        pop ();      
       
    }

    this.gravity = function (){
      
        let force = p5.Vector.sub(sun.pos, this.pos)
        let distanceSq = constrain(force.magSq(),100,250);
        
        let G = 0.002;
        let strength = G * (this.mass*sun.mass)/distanceSq

        force.setMag(strength);
        this.vel.add(force);

        //this.vel.add(g)

    }

    
    

    this.boost = function (){
        
        let force = p5.Vector.fromAngle(this.heading);
        force.mult(0.1)
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

