
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,ground,boy,boyImage,mangoObject1;
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
	tree = new Tree(600,420,400,550);
	ground = new Ground(400,height,800,20);
	stone = new Stone(90,520,40,50);
	
	mangoObject1 = new Mango(450,350,50);
	mangoObject2 = new Mango(490,300,50);
	mangoObject3 = new Mango(540,230,50);
	mangoObject4 = new Mango(560,380,50);
	mangoObject5 = new Mango(550,300,50);
	mangoObject6 = new Mango(650,230,50);
	mangoObject7 = new Mango(650,320,50);
	mangoObject8 = new Mango(690,350,50);
	mangoObject9 = new Mango(720,310,50);
	mangoObject10 = new Mango(750,360,50);
	
	Engine.run(engine);

}


function draw() 
{
  background(205);
  rectMode(CENTER);
  //background(0);
  tree.display();
  ground.display();
  
  image(boy,150,600,200,350);
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
  
  drawSprites();
 
}



