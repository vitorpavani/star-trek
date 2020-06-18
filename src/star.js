function Star(){
    let noiseOffSet = random(100);
    this.pos = createVector ( random (WIDTH), random (HEIGHT));
    let r = random(10);

    this.render = function (){
        //console.log("render")
        push ();     
        stroke (255);
        translate(this.pos.x, this.pos.y)       
        ellipse (0, 0 , r*noise(this.pos.x+this.pos.y*noiseOffSet));         
        pop (); 
        noiseOffSet+=0.01;
            
    }

    this.update = function(){

    }

    this.finished = function(){
       
        return dist(this.pos.x, this.pos.y, sun.pos.x, sun.pos.y ) < sun.r/2;
      }

}