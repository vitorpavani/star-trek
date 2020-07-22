function Sun(){
    this.r = random(40, 160);
    this.pos = createVector ( random (this.r, WIDTH-this.r)  , random (this.r, HEIGHT-this.r));
    this.mass = this.r*1
    this.frames = 0;
    this.dificulty = 0; 
    let sunColor = color('#FDB813');
    this.noiseOffSet = random (100);

    this.render = function (){
        //console.log("render")

        push ();
        this.frames++;
        translate(this.pos.x, this.pos.y)      

        if ( this.frames/100 < 10) {
            this.r+=0.4
           // console.log(this.frames/200 )
        }

        if(this.r > 300) this.r = 300;

        //console.log(this.dificulty)

        beginShape();
        for (let angle = 0; angle < TWO_PI; angle+=0.1){            
            let r = this.r+random(-4,4)
            let x = r*cos (angle);
            let y = r*sin (angle);
            vertex (x,y);  
        
        }
        fill(sunColor); 
        endShape(CLOSE); 
        
        this.mass = this.r
/*      fill(sunColor); 
        ellipse (0, 0 , this.r*(0.5+noise(this.noiseOffSet)) ) */
        this.noiseOffSet+=0.005

        pop ();  
                  

    }

    this.update = function (){
        
    }

    this.colision = function (){

        if (this.r/2 + ship.r > dist(this.pos.x, this.pos.y, ship.pos.x, ship.pos.y) ) {

        }        
        for(let i in asteroids){
            if (this.r/2 + asteroids[i].r > dist(this.pos.x, this.pos.y, asteroids[i].pos.x, asteroids[i].pos.y) ) {                
                asteroids.splice(i,1);
                asteroids.push(new Asteroid(createVector ( random(-1,1)*(WIDTH + 500) , random(-1,1)*(HEIGHT + 500)), random(20, 50) ));
            }
        }
    }





}