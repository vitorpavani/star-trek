function Sun(){
    this.r = random(40, 160);
    this.pos = createVector ( random (this.r, WIDTH-this.r)  , random (this.r, HEIGHT-this.r));
    this.mass = this.r*1
    this.frames = 0;
    this.dificulty = 0; 
    let sunColor = color('#FFFF00');
    
    


    this.render = function (){
        //console.log("render")
        push ();
        this.frames++;
        translate(this.pos.x, this.pos.y)       

        if ( this.frames/100 < 30) {
            this.r+=0.1
           // console.log(this.frames/200 )
        }

        //console.log(this.dificulty)

        
        this.mass = this.r
        fill(sunColor); 
        ellipse (0, 0 , this.r)        
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
                asteroids.push(new Asteroid());                
            }
        }
    }





}