function Star(){
    let noiseOffSet = random();
    this.pos = createVector ( random (WIDTH), random (HEIGHT));
    let r = random(10);


    this.render = function (){
        //console.log("render")
        push ();     
        stroke (255);
        translate(this.pos.x, this.pos.y)       
        ellipse (0, 0 , r*noise(noiseOffSet));         
        pop (); 
        noiseOffSet+=0.01;      
    }

    this.update = function(){

    }

    this.finished = function(){
       
        return dist(this.pos.x, this.pos.y, sun.pos.x, sun.pos.y ) < sun.r/2;
      }

}