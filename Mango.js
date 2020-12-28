class Mango{
    constructor(x,y,r){

        this.image = loadImage("mango.png")
        this.body = Bodies.circle(x,y,r/2,{isStatic:true})
        this.r = r
       // this.height = 50
        World.add(world,this.body)

    }

    display(){
 
        push();
        var pos = this.body.position
        translate(pos.x,pos.y);
        rotate(this.body.angle)
        image(this.image,0,0,50,50)
        pop();

        
    }
}