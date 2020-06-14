function Ship(){
    //this.pos = createVector(WIDTH/2, HEIGHT/2);
    this.pos = createVector(random(WIDTH), random(HEIGHT));
    this.r = 20;
    this.rotation = 0;
    this.heading = 0;
    this.vel = createVector(0, 0);
    this.isBoosting = false;


    this.render = function (){
        //console.log("render")
        push ();
        translate(this.pos.x, this.pos.y)
        rotate(this.heading+ PI/2);
        noFill();
        stroke (255);
        triangle(-this.r, this.r,this.r,this.r,0,-this.r-10);
        pop ();      
       
    }
    
    this.boosting = function (b){
       this.isBoosting =b;       

    }

    this.update = function (){
        if (this.isBoosting){
            this.boost();
        }
        this.pos.add(this.vel);
        this.vel.mult(0.999);
    }

    this.boost = function (){
        let force = p5.Vector.fromAngle(this.heading);
        force.mult(0.5)
        this.vel.add(force);

    }

    this.setRotation = function (angle){
        this.rotation = angle;
    }

    this.turn = function (){
        this.heading += this.rotation;
    }

    this.edges = function (){
        if (this.pos.x > WIDTH +this.r){
            this.pos.x  = -this.r;
        } else if(this.pos.x < -this.r){
            this.pos.x = WIDTH + this.r;
        }

        if (this.pos.y > HEIGHT +this.r){
            this.pos.y  = -this.r;
        } else if(this.pos.y < -this.r){
            this.pos.y = HEIGHT + this.r;
        }
        
    }

}