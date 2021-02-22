
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	
stone1=new Stone(242,37,40);
	treeObj=new tree(1050,580,30);
	mango1=new mango(1100,110,30);
	mango2=new mango(1200,180,30);
	mango3=new mango(904,181,30);
	mango4=new mango(1000,190,30);
	mango5=new mango(923,240,30);
	mango6=new mango(989,111,30);
	mango7=new mango(1098,201,30);
	mango8=new mango(1064,47,30);
mango9=new mango(1171,130,30);
	groundObject=new ground(width/2,600,width,20);
	SlingShot1 = new Slingshot(stone1.body,{x:235,y:426});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  //stone1.display();
  SlingShot1.display();
  mango9.display();
stone1.display();
  groundObject.display();
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango9);
 
  //stone2.display(); 

  groundObject.display();
  text("X"+mouseX+"Y"+mouseY,mouseX,mouseY);
}


function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x:mouseX,y:mouseY});

}
function mouseReleased(){
 sling1.body.position.x=mouseX

}
function detectCollision(lmango,lstone) {
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

  var distance=dist(  stoneBodyPosition.x,  stoneBodyPosition.y,  mangoBodyPosition.x,  mangoBodyPosition.y);
  if(distance<=  lmango.r+ lstone.r){

    Matter.body.setStatic(lmango.body,false);
  }

}
function keyPressed(){
  if (keyCode===32){
  Matter.body.setPosition(stone1.body,{x:242,y:37})  ;
  launcherObject.attach(stone1.body);
  } 


}