
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,ground,tree,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;

function preload()
{
	
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.

	boy = new Boy()
	ground = new Ground()
	tree = new Tree()
	m1 = new Mango(1400,300,20)
	m2 = new Mango(1300,240,20)
	m3 = new Mango(1367,260,20)
	m4 = new Mango(1240,278,20)
	m5 = new Mango(1180,260,20)
	m6 = new Mango(1340,160,20)
	m7 = new Mango(1269,160,20)
	m8 = new Mango(1456,219,20)
	m9 = new Mango(1470,280,20)
	m10 = new Mango(1390,190,20)
	stone = new Stone(150,470,40)
	rope = new Rope(stone.body,{ x:100,y:470})

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  boy.display();
  ground.display();
  tree.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  rope.display();
  stone.display();

  detectCollison(stone.body,m1.body);
  /*detectCollison(stone.body,m2.body);
  detectCollison(stone.body,m3.body);
  detectCollison(stone.body,m4.body);
  detectCollison(stone.body,m5.body);
  detectCollison(stone.body,m6.body);
  detectCollison(stone.body,m7.body);
  detectCollison(stone.body,m8.body);
  detectCollison(stone.body,m9.body);
  detectCollison(stone.body,m10.body);*/
  

  
  
 
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){

	rope.fly();
}

function detectCollison(lstone,lmango){

	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=lmango.r + lstone.r){

		Matter.Body.setStatic(lmango.body,false);
	}
}


