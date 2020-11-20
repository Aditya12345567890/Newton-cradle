
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rope1,rope2,rope3,rope4;
var marble1,marble2,marble3,marble4;
var handle1,handle2,handle3,handle4;
var ropeHolder

function setup() {
	createCanvas(800, 700);

  
  
  ropeHolder = createSprite(400,300,275,25)


	engine = Engine.create();
	world = engine.world;

	marble1 = new marble(310,500);
	marble2 = new marble(370,500)
	marble3 = new marble(430,500)
	marble4 = new marble(490,500)
  
  rope1 = new rope(marble1.body, {x:310, y :300 })
  rope2 = new rope(marble2.body, {x:370, y :300 })
  rope3 = new rope(marble3.body, {x:430, y :300 })
  rope4 = new rope(marble4.body, {x:490, y :300 })
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("azure");
  
  drawSprites();

  marble1.display();
  marble2.display();
  marble3.display();
  marble4.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();

  fill("red");
  textSize(20);

  fill(250, 5, 238)
  textSize(30)
  text("Drag the 1st marble and release it ",1,50)
  text("towards the 2nd marble to start.",1,75)
 
}

function mouseDragged(){

		Matter.Body.setPosition(marble1.body,{x:mouseX , y:mouseY})
	
}

