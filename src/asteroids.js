function Asteroid(){
    this.pos = createVector ( random (WIDTH), random (HEIGHT));
    this.vel = p5.Vector.random2D();
    this.r = random(40, 80);
    this.numberOfVertex = floor(random (5, 15));
    this.offset = [];

    for(let i = 0; i< this.numberOfVertex;i++){
        this.offset[i] = random(-15,15)
    }

    this.render = function (){
        //console.log("render")
        push ();
        translate(this.pos.x, this.pos.y)
        noFill();
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

    this.update = function (){
        this.pos.add(this.vel);
        
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