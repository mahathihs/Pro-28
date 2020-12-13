
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg;

function preload()
{
	backgroundImg=loadImage("images/bgImg.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  tree=new Tree(510,10,700,700);
	  ground=new Ground(600,690,1200,20);
	  stone=new Stone(100,250,70);
	  mango1=new Mango(720,160,30);
	  mango2=new Mango(780,300,30);
	  mango3=new Mango(880,80,30);
	  mango4=new Mango(850,200,30);
	  mango5=new Mango(620,270,30);
	  mango6=new Mango(1000,280,30);
	  mango7=new Mango(1000,160,30);
	  mango8=new Mango(1120,220,30);
	  man=new Man(stone.body,{x:200,y:50});

	
}
function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(backgroundImg);

  textSize(30);
  stroke(0);
  strokeWeight(3);
  fill(0);
  text("Want to try again??Press space to get another chance.",50,650);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  man.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	stone.fly();
}

function keyPressed(){
	if(keyCode===32){

		Matter.Body.setPosition(stone.body,{x:235,y:420});
		man.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}