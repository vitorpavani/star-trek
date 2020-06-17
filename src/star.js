function Star(){
    this.pos = createVector ( random (WIDTH), random (HEIGHT));
    


    this.render = function (){
        //console.log("render")
        push ();     
        stroke (255);
        translate(this.pos.x, this.pos.y)       
        ellipse (0, 0 , random (4));         
        pop ();       
    }

    this.update = function(){

    }


}