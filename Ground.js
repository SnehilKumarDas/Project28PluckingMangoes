class Ground{
    constructor(){

        this.body = Bodies.rectangle(750,650,1800,20,{isStatic : true})
        this.width = 2500
        this.height = 20
        World.add(world,this.body)
    }

    display(){

        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}