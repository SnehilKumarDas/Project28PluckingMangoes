
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = new Boy()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  boy.display();
  
  drawSprites();
 
}



