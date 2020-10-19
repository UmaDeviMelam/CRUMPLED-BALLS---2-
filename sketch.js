
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var left,left1,paper1;


function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	var paper_options={
		isStatic:false,
		restitution:0.3,	
		friction:0.5,
		density:1.2
	}

	//Create the Bodies Here.

	paper1 = new Paper(100,200,50);	

	ground = new Ground(600,height,1600,20,{isStatic:true});
	dustbinObj=new dustbin(1200,680);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("white");
  keyPressed();

  paper1.display();
  ground.display();
  dustbinObj.display();

  drawSprites();
}


 
function keyPressed(){
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1,y:-3});
	}
}