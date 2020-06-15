function Asteroid(){
    this.pos = createVector ( random (WIDTH,WIDTH + 500), random (HEIGHT,HEIGHT + 500));
    this.vel = createVector(random(-5,5), random(-5,5));
    this.r = random(40, 80);
    this.numberOfVertex = floor(random (5, 15));
    this.offset = [];
    this.mass = this.r*0.01;

    for(let i = 0; i< this.numberOfVertex;i++){
        this.offset[i] = random(-15,15)
    }

    this.render = function (){
        //console.log("render")
        push ();
        translate(this.pos.x, this.pos.y)
        fill(color('#808080'))
        stroke (255);
        //ellipse (0, 0 , this.r*2)
        
        beginShape();
        for (let i = 0; i<this.numberOfVertex; i++){
            let angle = map(i, 0, this.numberOfVertex, 0, TWO_PI);
            let r = this.r + this.offset[i];
            let x = r*cos (angle);
            let y = r*sin (angle);
            vertex (x,y);
        }
        endShape(CLOSE);        
        pop ();       
    }

    this.gravity = function (){
      
        for(let i = 0; i < asteroids.length ; i++){

        let force = p5.Vector.sub(sun.pos, this.pos)
        let distanceSq = constrain(force.magSq(),100,150);
        
        let G = 0.002;
        let strength = G * (this.mass*sun.mass)/distanceSq

        force.setMag(strength);
        this.vel.add(force);
        
        }        

    }

    this.update = function (){
        this.pos.add(this.vel);
        
    }





}