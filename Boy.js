class Boy{

    constructor(){

        this.image = loadImage("boy.png")
        this.boy = Bodies.rectangle(100,200,50,100,{isStatic : true})
        this.width = 50
        this.height = 100
        World.add(world,this.boy)

    }

    display(){

        imageMode(CENTER)
        image(this.image,this.boy.position.x,this.boy.position.y,this.width,this.height)
    }
}