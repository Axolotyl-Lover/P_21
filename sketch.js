
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world
let ball
let ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ground = Bodies.rectangle(200,380,400,20)
	World.add(world,ground)

	var ball_options = {
		isStatic:false,
		restitiution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball.Bodies.circle(400,500,40,ball_options)
	World.add(world,ground)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)

  background(0);
  
  groundObj.display()
  drawSprites();
 
}



