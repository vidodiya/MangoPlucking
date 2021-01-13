
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,ground,boy,boyImage,mangoObject1,chain;
function preload()
{
	boy = loadImage("boy.png");
}

function setup() 
{
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(600,490,300,400);
	ground = new Ground(400,height,800,20);
	stone = new Stone(100,570,40);
	
	mangoObject1 = new Mango(510,400,50);
	mangoObject2 = new Mango(500,450,50);
	mangoObject3 = new Mango(590,390,50);
	mangoObject4 = new Mango(560,480,50);
	mangoObject5 = new Mango(550,370,50);
	mangoObject6 = new Mango(650,330,50);
	mangoObject7 = new Mango(650,420,50);
	mangoObject8 = new Mango(690,450,50);
	mangoObject9 = new Mango(720,410,50);
	mangoObject10 = new Mango(750,450,50);

	chain = new Elastic({x:100,y:570},stone.body);

	
	Engine.run(engine);

}


function draw() 
{
  background(205);
  rectMode(CENTER);
  ground.display();
  //background(0);
  tree.display();
  image(boy,150,620,150,250);
  
  
  
  stone.display();
  mangoObject1.display();
  mangoObject2.display();
  mangoObject3.display();
  mangoObject4.display();
  mangoObject5.display();
  mangoObject6.display();
  mangoObject7.display();
  mangoObject8.display();
  mangoObject9.display();
  mangoObject10.display();

  detectCollision(stone,mangoObject1);
  detectCollision(stone,mangoObject2);
  detectCollision(stone,mangoObject3);
  detectCollision(stone,mangoObject4);
  detectCollision(stone,mangoObject5);
  detectCollision(stone,mangoObject6);
  detectCollision(stone,mangoObject7);
  detectCollision(stone,mangoObject8);
  detectCollision(stone,mangoObject9);
  detectCollision(stone,mangoObject10);

  chain.display();
  textSize(20);
  //fill("blue");
  text("Press Space to get a second chance to play",100,150);
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
	chain.fly();
}
function detectCollision(lstone,lmango) {
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	//console.log("s "+lstone.r);
	//console.log("d "+distance);
	if(distance <= lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:100,y:570});
		chain.attach(stone.body);
	}
}

