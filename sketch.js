
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftside,rightside;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(100,580,1400,20);
	leftside=new Ground(500,540,10,80);
	rightside=new Ground(650,520,10,120);
    var ball_options=
	{
     isStatic:false,
	  restitution:0.3,
	  friction:0,
	  density:1.2		


    }
    
    
	 
	 ball=Bodies.circle(180,300,20,ball_options);
	  World.add(world,ball);
	 Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  
 
   ellipse(ball.position.x,ball.position.y,20);
  ground.display();
  leftside.display();
  rightside.display();
 }
   function keyPressed(){
   if(keyCode=== UP_ARROW ){
	   	Matter.Body.applyForce(ball,ball.position,{x:60,y:150});
   }
   }


