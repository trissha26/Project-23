
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(700, 400);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200,20)
	ground = new Ground(500,380,1000,20)

	
	 

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();

  drawSprites();
 
}



