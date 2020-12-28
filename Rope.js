class Rope{
    constructor(body1,point2){

        var options = {

            bodyA : body1,
            pointB : point2,
            stiffness : 0.004,
            length : 8
        }

        this.rope = Constraint.create(options)
        World.add(world,this.rope)
        this.pb = point2
    }

    fly(){
        
        this.rope.bodyA = null;
    }

    display(){

  
        if (this.rope.bodyA) { 
            var posA = this.rope.bodyA.position;
             var posB = this.pb; 
             stroke("black"); 
             strokeWeight(3); 
             line(posB.x, posB.y, posA.x, posA.y); }


   

    }
}

